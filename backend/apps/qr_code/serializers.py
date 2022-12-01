from django.core.files.images import ImageFile
from django.db.transaction import atomic
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import QrModel, AddressModel, PublicPlaceModel
from ..users.serializers import UserSerializer

from .services import create_qr_url

basis = 'localhost:8000'


class AddressSerializer(ModelSerializer):
    class Meta:
        model = AddressModel
        exclude = ('public_place',)


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
        return abs_qr_path


class GetPublicPlacesSerializer(ModelSerializer):
    owner = UserSerializer()
    address = SerializerMethodField()
    # qr_code = QrModelSerializer(source='public_place', read_only=True)
    qr_data = SerializerMethodField()

    class Meta:
        model = PublicPlaceModel
        # fields = '__all__'
        fields = (
            'id',
            'owner',
            'name',
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
        qr_code = QrModelSerializer(instance=qr_code_instance,context=self.context)
        return qr_code.data


class PublicPlaceSerializer(ModelSerializer):
    qr_code = QrModelSerializer(read_only=True)
    address = AddressSerializer()
    owner = UserSerializer(source='owner_id')

    class Meta:
        model = PublicPlaceModel
        fields = (
            'name',
            'owner',
            'working_time_start',
            'working_time_end',
            'created_at',
            'address',
            'qr_code',

        )
        read_only_fields = (
            'created_at',
            'qr_code',
        )

    @atomic
    def create(self, validated_data):
        address = validated_data.pop('address')
        public_place = PublicPlaceModel.objects.create(**validated_data)
        AddressModel.objects.create(**address, public_place=public_place)
        img_url = f"{basis}/place/{public_place.id}"
        img = create_qr_url(url=img_url)
        img_file = ImageFile(file=img, name=f'{public_place.id}.png')
        QrModel.objects.create(
            public_place=public_place,
            qr_code=img_file,
            qr_url=img_url,
        )
        return public_place
