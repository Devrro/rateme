from django.db.models import Avg

from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from .models import ReviewModel


class ReviewSerializer(ModelSerializer):

    class Meta:
        model = ReviewModel
        fields = (
            'id',
            'customer_review',
            'place_score',
            'customer_name',
            'customer_phone_number',
            'place',
            'created_at',
        )
