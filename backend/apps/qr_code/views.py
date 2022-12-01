from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import QrModel, PublicPlaceModel
from .serializers import QrModelSerializer, PublicPlaceSerializer, GetPublicPlacesSerializer

from django.contrib.auth import get_user_model
from ..users.models import UserModel as UserModelTyping

UserModel: UserModelTyping = get_user_model()


class ListAllQrCodesView(ListAPIView):
    queryset = QrModel.objects.all()
    serializer_class = QrModelSerializer
    permission_classes = (AllowAny,)


class ListAllPlacesView(ListAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (AllowAny,)



class CreatePublicPlaceView(CreateAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = PublicPlaceSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        data = self.request.data
        serializer = self.serializer_class(data=data,partial=True)
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
            return Response(serializer.validated_data)
        else:
            return Response(serializer.errors)


# else:
#     return Response(serializer.errors)
