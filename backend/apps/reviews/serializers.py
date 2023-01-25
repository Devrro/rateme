import os

from rest_framework.serializers import ModelSerializer

from apps.telegrambot.models import TelegramTokenKey

from ..telegrambot.services import telegram_bot_instance
from .models import ReviewModel
from .services import format_telegram_message
from .tasks import send_to_telegram

telegram_bot = telegram_bot_instance
bot_token = os.environ.get('TELEGRAM_BOT_API_KEY')


class ReviewSerializer(ModelSerializer):
    class Meta:
        model = ReviewModel
        fields = (
            'id',
            'customer_review',
            'place_score',
            'customer_name',
            'customer_phone_number',
            'place',
            'created_at',
        )

    def create(self, validated_data: dict):
        public_place = validated_data.get('place')
        telegram_obj = TelegramTokenKey.objects.filter(user=public_place.user_id).first()
        review = ReviewModel.objects.create(**validated_data)
        if telegram_obj.is_active:
            msg = format_telegram_message(public_place.name, validated_data)
            send_to_telegram.delay(bot_token, telegram_obj.user_chat_id, msg)
        return review
