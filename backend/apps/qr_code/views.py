from core.permissions.place_owner_permission import PlaceOwnerPermission

from django.contrib.auth import get_user_model

from rest_framework import filters, status
from rest_framework.generics import CreateAPIView, DestroyAPIView, ListAPIView, UpdateAPIView, get_object_or_404
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from ..users.models import UserModel as UserModelTyping
from .models import AddressModel, PublicPlaceModel, QrModel
from .serializers import AddressSerializer, GetPublicPlacesSerializer, PublicPlaceSerializer, QrModelSerializer

UserModel: UserModelTyping = get_user_model()


class ListAllQrCodesView(ListAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = QrModelSerializer
    filter_backends = [filters.OrderingFilter]
    permission_classes = (AllowAny,)
    ordering_fields = '__all__'
    ordering = ('-created_at',)


class ListAuthUserPlacesView(ListAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'
    ordering = ('-created_at',)

    def get_queryset(self):
        qs = self.queryset.filter(user=self.request.user)
        return qs


class ListPlacesByUserId(ListAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (PlaceOwnerPermission or IsAdminUser,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'
    ordering = ('-created_at',)

    def get_queryset(self):
        qs = self.queryset.filter(user_id=self.kwargs.get('pk', None))
        return qs


class ListAllPlacesView(ListAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    filter_backends = [filters.OrderingFilter]
    permission_classes = (AllowAny,)
    ordering_fields = '__all__'
    ordering = ('-created_at',)

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
            place_obj = serializer.save(user=self.request.user)
            qs = self.get_queryset().get(pk=place_obj.id)
            new_place_obj = GetPublicPlacesSerializer(qs, context={"request": request}, many=False)
            return Response(new_place_obj.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_403_FORBIDDEN)

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
        obj = get_object_or_404(qs, )
        return obj

    """
        Probably should rework this soon
    """

    def patch(self, request, *args, **kwargs):

        if self.request.data == {}:
            return Response({'detail': 'At least one field must be updated'}, status=status.HTTP_403_FORBIDDEN)

        request_dict: dict = self.request.data
        address_object = self.get_object()
        data = {k: v for k, v in request_dict.items() if v}
        serializer = self.serializer_class(address_object, data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeletePublicPlaceView(DestroyAPIView):
    queryset = PublicPlaceModel.objects.all()
    serializer_class = GetPublicPlacesSerializer
    permission_classes = (PlaceOwnerPermission,)

    def get_queryset(self):
        qs = self.queryset.filter(pk=self.kwargs.get('pk', None))
        return qs
