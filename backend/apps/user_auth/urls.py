from .views import ActivateUserView, ConfirmNewPasswordView, RefreshUserPasswordView

from django.urls import path

urlpatterns = [
    path('/activate/<str:token>', ActivateUserView.as_view(), name='user_activate_account'),
    path('/reset_password', RefreshUserPasswordView.as_view(), name='user_refresh_account'),
    path('/recovery/<str:token>', ConfirmNewPasswordView.as_view(), name='user_refresh_account'),
]