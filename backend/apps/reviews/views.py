from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.generics import CreateAPIView, get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from ..qr_code.models import PublicPlaceModel
from .models import ReviewModel
from .serilazers import ReviewSerializer


class CreateReviewView(CreateAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        place_pk = kwargs.get('pk')
        place_qs = PublicPlaceModel.objects.all()
        data = self.request.data
        place = get_object_or_404(place_qs, pk=place_pk)
        serializer = self.serializer_class(data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(place=place)
        return Response({'detail': 'Review was created'}, status=status.HTTP_201_CREATED)
        # else:
        # return Response({'detail': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
