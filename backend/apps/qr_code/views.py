from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from core.permissions.place_owner_permission import PlaceOwnerPermission
from .models import QrModel, PublicPlaceModel, AddressModel
from .serializers import QrModelSerializer, PublicPlaceSerializer, GetPublicPlacesSerializer, AddressSerializer

from django.contrib.auth import get_user_model
from ..users.models import UserModel as UserModelTyping

UserModel: UserModelTyping = get_user_model()


class ListAllQrCodesView(ListAPIView):
    queryset = QrModel.objects.all()
    serializer_class = QrModelSerializer
    permission_classes = (AllowAny,)


class ListAuthUserPlacesView(ListAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        qs = self.queryset.filter(user=self.request.user)
        return qs


class ListPlacesByUserId(ListAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (PlaceOwnerPermission or IsAdminUser,)

    def get_queryset(self):
        qs = self.queryset.filter(user_id=self.kwargs.get('pk', None))
        return qs


class ListAllPlacesView(ListAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (AllowAny,)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context


class CreatePublicPlaceView(CreateAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = PublicPlaceSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        data = self.request.data
        serializer = self.serializer_class(data=data, partial=True, context={"request": request}, many=False)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.validated_data)
        else:
            return Response(serializer.errors)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context


class UpdatePublicPlaceView(UpdateAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (PlaceOwnerPermission,)

    def get_queryset(self):
        qs = self.queryset.filter(pk=self.kwargs.get('pk', None))
        return qs


class UpdatePublicPlaceAddressView(UpdateAPIView):
    queryset = AddressModel.objects.all()
    serializer_class = AddressSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        qs = self.queryset.filter(public_place_id__exact=self.kwargs.get('pk', None))
        return qs

    def get_object(self):
        qs = self.get_queryset()
        obj = get_object_or_404(qs,)
        return obj


class DeletePublicPlaceView(DestroyAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (PlaceOwnerPermission,)

    def get_queryset(self):
        qs = self.queryset.filter(pk=self.kwargs.get('pk', None))
        return qs
