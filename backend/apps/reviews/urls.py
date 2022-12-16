from django.urls import path

from .views import CreateReviewView, ListReviewsAvgScoreView, ListReviewsView

urlpatterns = [
    path('/place_review/<str:pk>', CreateReviewView.as_view(), name='create_review'),
    path('/get_reviews/<str:pk>', ListReviewsView.as_view(), name='get_place_reviews'),
    path('/get_avg_place_score/<str:pk>', ListReviewsAvgScoreView.as_view(), name='get_place_avg_score'),
]
