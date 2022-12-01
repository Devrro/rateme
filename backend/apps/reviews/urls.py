from django.urls import path

from .views import CreateReviewView

urlpatterns = [
    path('place/<int:pk>', CreateReviewView.as_view(), name='create_review')
]