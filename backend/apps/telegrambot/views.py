from rest_framework.generics import ListAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated

from apps.telegrambot.models import TelegramTokenKey
from apps.telegrambot.serializers import TelegramTokenSerializer


class GetTelegramKey(ListAPIView):
    queryset = TelegramTokenKey.objects.all()
    serializer_class = TelegramTokenSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        qs = self.queryset
        return qs.filter(user=self.request.user)

    def get_object(self):
        return get_object_or_404(self.get_queryset())

