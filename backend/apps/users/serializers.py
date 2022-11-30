from typing import Type

from django.contrib.auth import get_user_model
from django.db.transaction import atomic

from rest_framework.serializers import ModelSerializer

from .models import ProfileModel

UserModel = get_user_model()


class AvatarSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ('avatar',)


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        exclude = ('user', 'id')


class UserSerializer(ModelSerializer):
    profile: Type[ProfileSerializer] = ProfileSerializer()

    class Meta:
        model = UserModel
        fields = (
            'id',
            'login',
            'email',
            'password',
            'created_at',
            'updated_at',
            'is_staff',
            'is_active',
            'is_superuser',
            'profile',
        )
        read_only_fields = (
            'id',
            'created_at',
            'updated_at',
            'is_staff',
            'is_active',
            'is_superuser',
            'profile',
        )
        extra_kwargs = {
            'password': {'write_only': True},
        }

    @atomic
    def create(self, validated_data):
        profile = validated_data.pop('profile')
        user: UserModel = UserModel.objects.create_user(**validated_data)
        ProfileModel.objects.create(**profile, user=user)
        return user
