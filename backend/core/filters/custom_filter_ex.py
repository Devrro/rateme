from django_filters import rest_framework as filters

from apps.reviews.models import ReviewModel


class CustomReviewFiler(filters.FilterSet):
    long_review = filters.CharFilter(field_name='customer_review', lookup_expr='length')

    class Meta:
        model = ReviewModel
        fields = ('customer_review',)
