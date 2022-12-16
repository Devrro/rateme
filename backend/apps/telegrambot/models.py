from secrets import token_urlsafe

from django.contrib.auth import get_user_model
from django.db import models

from apps.users.models import UserModel as UserModelTyping

UserModel: UserModelTyping = get_user_model()


class TelegramTokenKey(models.Model):
    class Meta:
        db_table = 'telegram_token_keys'

    token_key = models.CharField(max_length=64, default=token_urlsafe(16))
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='token_key')
