from django.core.validators import MaxValueValidator, MinValueValidator, RegexValidator
from django.db import models

# Create your models here.
from ..qr_code.models import PublicPlaceModel

ukraine_phone_number_regex = r'(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$)'


class ReviewModel(models.Model):
    class Meta:
        db_table = 'reviews'

    customer_review = models.TextField(max_length=1000, blank=True)
    place_score = models.IntegerField(validators=[
        MaxValueValidator(5),
        MinValueValidator(1),
    ], blank=False)
    customer_name = models.CharField(max_length=64, blank=True)
    customer_phone_number = models.CharField(max_length=16, validators=[RegexValidator(ukraine_phone_number_regex)],
                                             blank=True)
    place = models.ForeignKey(PublicPlaceModel, on_delete=models.DO_NOTHING, related_name='public_place')
    created_at = models.DateTimeField(auto_now_add=True)
