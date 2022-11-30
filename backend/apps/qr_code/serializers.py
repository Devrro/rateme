from django.db.transaction import atomic
from rest_framework.serializers import ModelSerializer
import qrcode as q
from django.core.files import File
from .models import QrModel, AddressModel, PublicPlaceModel
from ..users.serializers import UserSerializer

basis = 'localhost:8000'


class AddressSerializer(ModelSerializer):
    class Meta:
        model = AddressModel
        exclude = ('public_place',)


class QrModelSerializer(ModelSerializer):
    class Meta:
        model = QrModel
        fields = (
            'qr_code',
            'qr_url'
            'created_at',
        )
        read_only_fields = (
            'qr_code',
            'qr_url'
            'created_at',
        )


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
        img = self.create_qr_url(url=img_url)
        img_file = File(file=img, name=f'{public_place.id}.png')
        QrModel.objects.create(
            public_place=public_place,
            qr_code=img_file,
            qr_url=img_url,
        )
        return public_place

    @staticmethod
    def create_qr_url(url: str):
        qrcode = q.QRCode(
            version=1,
            error_correction=q.constants.ERROR_CORRECT_L,
            box_size=10,
            border=5,
        )
        qrcode.add_data(url)
        qrcode.make(fit=True)

        img = qrcode.make_image(fill_color='black', back_color='white')
        return img
