from django.urls import path

from .views import UserAddAvatarView, UserCreateView, UserListByIdView, UserListSelfView, UserListView, \
    UpdateMyProfileView

urlpatterns = [
    path('/signup', UserCreateView.as_view(), name='sign_up'),
    path('/all', UserListView.as_view(), name='users'),
    path('/me', UserListSelfView.as_view(), name='user_self'),
    path('/user/<int:pk>', UserListByIdView.as_view(), name='user_by_id'),
    path('/avatars', UserAddAvatarView.as_view(), name='add_avatar'),
    path('/profile', UpdateMyProfileView.as_view(), name='update_profile'),
]
