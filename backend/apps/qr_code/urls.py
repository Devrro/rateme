from django.urls import path

from .views import ListAllQrCodesView, CreatePublicPlaceView, ListAllPlacesView, DeletePublicPlaceView

urlpatterns = [
    path('/all', ListAllPlacesView.as_view(), name='list_all_places'),
    path('/create_place', CreatePublicPlaceView.as_view(), name='create_place'),
    path('/delete_place/<str:pk>', DeletePublicPlaceView.as_view(), name='delete_place_by_id'),
    path('/list_all_qr', ListAllQrCodesView.as_view(), name='list_all_qr'),
]