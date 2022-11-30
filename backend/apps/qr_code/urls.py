from django.urls import path

from .views import ListAllQrCodesView, CreatePublicPlaceView

urlpatterns = [
    path('/create_place', CreatePublicPlaceView.as_view(), name='create_place'),
    path('/list_all_qr', ListAllQrCodesView.as_view(), name='list_all_qr')
]