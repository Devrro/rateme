from re import sub

from django.core.files.images import ImageFile
from django.db.transaction import atomic

from rest_framework.serializers import ModelSerializer, SerializerMethodField

from ..users.serializers import UserSerializer
from .models import AddressModel, PublicPlaceModel, QrModel
from .services import create_qr_url

basis = 'localhost:8000'


class AddressSerializer(ModelSerializer):
    class Meta:
        model = AddressModel
        exclude = ('public_place',)


class PlacePictureSerializer(ModelSerializer):
    class Meta:
        model = PublicPlaceModel
        fields = ('place_picture',)


class QrModelSerializer(ModelSerializer):
    qr_code = SerializerMethodField()

    class Meta:
        model = QrModel
        fields = '__all__'
        # read_only_fields = (
        #     'public_place','qr_url','qr_code','created_at'
        # )

    def get_qr_code(self, obj):
        req = self.context.get('request')
        qr_code_instance = QrModel.objects.get(pk=obj.public_place)
        abs_qr_path = req.build_absolute_uri(qr_code_instance.qr_code.url)
        abs_qr_path = sub(pattern=r'/media/', repl=r'/api/media/', string=f'{abs_qr_path}', )
        return abs_qr_path


class GetPublicPlacesSerializer(ModelSerializer):
    user = UserSerializer(read_only=True)
    address = SerializerMethodField()
    # qr_code = QrModelSerializer(source='public_place', read_only=True)
    qr_data = SerializerMethodField(read_only=True)
    place_picture = PlacePictureSerializer

    class Meta:
        model = PublicPlaceModel
        # fields = '__all__'
        fields = (
            'id',
            'user',
            'name',
            'place_picture',
            'working_time_start',
            'working_time_end',
            'created_at',
            'address',
            'qr_data',
        )

    def get_address(self, obj: PublicPlaceModel):
        address_instance = AddressModel.objects.get(public_place_id__exact=obj.id)
        address = AddressSerializer(instance=address_instance)
        return address.data

    #
    def get_qr_data(self, obj: PublicPlaceModel):
        qr_code_instance = QrModel.objects.get(public_place_id__exact=obj.id)
        qr_code = QrModelSerializer(instance=qr_code_instance, context=self.context)
        return qr_code.data


class PublicPlaceSerializer(ModelSerializer):
    qr_code = QrModelSerializer(read_only=True)
    address = AddressSerializer()
    user = UserSerializer(source='user_id')
    place_picture = PlacePictureSerializer

    class Meta:
        model = PublicPlaceModel
        fields = (
            'id',
            'name',
            'user',
            'working_time_start',
            'working_time_end',
            'created_at',
            'address',
            'qr_code',
            'place_picture',

        )
        read_only_fields = (
            'place_picture',
            'created_at',
            'qr_code',
        )

    @atomic
    def create(self, validated_data):
        address = validated_data.pop('address')
        public_place = PublicPlaceModel.objects.create(**validated_data)
        AddressModel.objects.create(**address, public_place=public_place)

        req = self.context.get('request')
        abs_qr_path = req.build_absolute_uri(f"/rate_place/{public_place.id}")
        img = create_qr_url(url=abs_qr_path)
        img_file = ImageFile(file=img, name=f'{public_place.id}.png')
        QrModel.objects.create(
            public_place=public_place,
            qr_code=img_file,
            qr_url=abs_qr_path,
        )
        return public_place
