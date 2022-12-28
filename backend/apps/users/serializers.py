from re import sub
from typing import Type

from services.email_service import EmailService

from django.contrib.auth import get_user_model
from django.db.transaction import atomic

from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from ..telegrambot.models import TelegramTokenKey
from .models import ProfileModel

UserModel = get_user_model()


class AvatarSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ('avatar',)


class GetAvatarSerializer(ModelSerializer):
    avatar = SerializerMethodField()

    class Meta:
        model = ProfileModel
        fields = ('avatar',)

        qr_code = SerializerMethodField()

    def get_avatar(self, obj):
        req = self.context.get('request')
        # profile_instance = ProfileModel.objects.get()
        avatar_url = req.build_absolute_uri(obj.url)
        avatar_url = sub(pattern=r'/media/', repl=r'/api/media/', string=f'{avatar_url}', )
        return avatar_url

class ProfileSerializer(ModelSerializer):
    avatar = GetAvatarSerializer(read_only=True)

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
        EmailService.register(user=user,)
        return user
