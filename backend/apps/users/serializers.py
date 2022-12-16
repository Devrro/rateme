from typing import Type

from django.contrib.auth import get_user_model
from django.db.transaction import atomic
from rest_framework.fields import SerializerMethodField

from rest_framework.serializers import ModelSerializer

from .models import ProfileModel
from ..telegrambot.models import TelegramTokenKey

UserModel = get_user_model()


class AvatarSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ('avatar',)


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        exclude = ('user', 'id')


class TelegramTokenSerializer(ModelSerializer):
    class Meta:
        model = TelegramTokenKey
        fields = ('token_key',)


class UserSerializer(ModelSerializer):
    profile: Type[ProfileSerializer] = ProfileSerializer()
    telegram_token_key = TelegramTokenSerializer(read_only=True)

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
            'telegram_token_key',
        )
        read_only_fields = (
            'id',
            'created_at',
            'updated_at',
            'is_staff',
            'is_active',
            'is_superuser',
            'profile',
            'telegram_token_key',
        )
        extra_kwargs = {
            'password': {'write_only': True},
        }


    @atomic
    def create(self, validated_data):
        profile = validated_data.pop('profile')
        user: UserModel = UserModel.objects.create_user(**validated_data)
        TelegramTokenKey.objects.create(user=user)
        ProfileModel.objects.create(**profile, user=user)
        return user
