from django.urls import path

from apps.telegrambot.views import GetTelegramKey

urlpatterns = [
    path('', GetTelegramKey.as_view(), name='telegram_key_object')
]
