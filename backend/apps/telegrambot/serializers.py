from rest_framework.serializers import ModelSerializer

from apps.telegrambot.models import TelegramTokenKey


class TelegramTokenSerializer(ModelSerializer):

    class Meta:
        model = TelegramTokenKey
        fields = '__all__'

