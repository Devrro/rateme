from django.db.models import Avg

from rest_framework import filters, status
from rest_framework.generics import CreateAPIView, ListAPIView, get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from ..qr_code.models import PublicPlaceModel
from .models import ReviewModel
from .serializers import ReviewSerializer


class CreateReviewView(CreateAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        place_pk = kwargs.get('pk')
        place_qs = PublicPlaceModel.objects.all()
        data = self.request.data
        place = get_object_or_404(place_qs, pk=place_pk)
        serializer = self.serializer_class(data=data, partial=True, context={'request': self.request})
        if serializer.is_valid():
            serializer.save(place=place)

            return Response({'detail': 'Review was created'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'detail': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        # else:
        # return Response({'detail': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class ListReviewsView(ListAPIView):
    queryset = ReviewModel.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'
    ordering = '-created_at'

    def get_queryset(self):
        obj_id = self.kwargs.get('pk', '')
        qs = self.queryset.filter(place_id=obj_id)
        return qs

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            if serializer.data:
                return self.get_paginated_response(serializer.data)
            else:
                return Response({'detail': 'Place has no reviews yet...'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'detail': 'Place has no reviews yet...'}, status=status.HTTP_404_NOT_FOUND)


class ListReviewsAvgScoreView(ListAPIView):
    queryset = ReviewModel.objects.all()
    # serializer_class = ReviewSerializer
    filter_backends = [filters.OrderingFilter]
    permission_classes = (IsAuthenticated,)
    ordering_fields = '__all__'

    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        data = ReviewModel.objects.filter(place=pk).aggregate(Avg('place_score'))
        return Response({'data': data}, status=status.HTTP_200_OK)
