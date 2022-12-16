import uuid

from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from django.db import models

from .services import save_qr_to

UserModel = get_user_model()


# Create your models here.

class PublicPlaceModel(models.Model):
    class Meta:
        db_table = 'public_place'

    """
    This model creates qr code via serializer class. When user creates a place,
    specific qr code is generated and qr binds to place.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid1)
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='users')
    name = models.CharField(max_length=255, blank=False, null=False)
    working_time_start = models.CharField(
        validators=[RegexValidator("([01]?[0-9]|2[0-3]):[0-5][0-9]")],
        max_length=5,
        blank=True
    )
    working_time_end = models.CharField(
        RegexValidator("([01]?[0-9]|2[0-3]):[0-5][0-9]"),
        max_length=5,
        blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class AddressModel(models.Model):
    class Meta:
        db_table = 'address'

    public_place = models.OneToOneField(PublicPlaceModel, on_delete=models.CASCADE)
    country = models.CharField(max_length=30, choices=[('UA', 'Ukraine')])
    city = models.CharField(max_length=64)
    street = models.CharField(max_length=64)
    street_number = models.IntegerField()
    zipcode = models.IntegerField()


class QrModel(models.Model):
    class Meta:
        db_table = 'qr_code'

    public_place = models.OneToOneField(PublicPlaceModel, primary_key=True, on_delete=models.CASCADE)
    qr_url = models.CharField(max_length=255)
    qr_code = models.ImageField(upload_to=save_qr_to, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
