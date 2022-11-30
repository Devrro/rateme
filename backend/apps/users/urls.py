from django.urls import path

from .views import UserListView, UserCreateView, UserListSelfView, UserListByIdView, UserAddAvatarView

urlpatterns = [
    path('/signup', UserCreateView.as_view(), name='sign_up'),
    path('/all', UserListView.as_view(), name='users'),
    path('/me', UserListSelfView.as_view(), name='user_self'),
    path('/user/<int:pk>', UserListByIdView.as_view(), name='user_by_id'),
    path('/avatars', UserAddAvatarView.as_view(), name='add_avatar'),
]