from django.urls import path

from .views import (
    CreatePublicPlaceView,
    DeletePublicPlaceView,
    ListAllPlacesView,
    ListAllQrCodesView,
    ListAuthUserPlacesView,
    ListPlacesByUserId,
    UpdatePublicPlaceAddressView,
    UpdatePublicPlaceView,
)

urlpatterns = [
    path('/all', ListAllPlacesView.as_view(), name='list_all_places'),
    path('/my_places', ListAuthUserPlacesView.as_view(), name='list_user_places'),

    path('/update_place_by_id/<str:pk>', UpdatePublicPlaceView.as_view(), name='update_place_by_id'),

    path('/update_place_address_by_id/<str:pk>', UpdatePublicPlaceAddressView.as_view(), name='update_place_by_id'),

    path('/by_user_id/<int:pk>', ListPlacesByUserId.as_view(), name='list_all_places'),

    path('/create_place', CreatePublicPlaceView.as_view(), name='create_place'),
    path('/delete_place/<str:pk>', DeletePublicPlaceView.as_view(), name='delete_place_by_id'),
    path('/list_all_qr', ListAllQrCodesView.as_view(), name='list_all_qr'),
]