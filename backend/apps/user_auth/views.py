from services.email_service import EmailService
from services.jwt_service import ActivateToken, JwtService, RefreshPassword

from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from apps.user_auth.serializeers import EmailSerializer, PasswordSerializer
from apps.users.models import UserModel as UserModelTyping

UserModel: UserModelTyping = get_user_model()


class ActivateUserView(GenericAPIView):

    def get(self, *args, **kwargs):
        token = kwargs.get('token')
        user: UserModelTyping = JwtService.validate_token(token, token_class=ActivateToken)
        user.is_active = True
        return Response({'detail': 'User is activated'}, status=status.HTTP_200_OK)


class RefreshUserPasswordView(GenericAPIView):
    permission_classes = (AllowAny,)
    queryset = UserModel.objects.all()

    # def get_queryset(self):
    #     qs = self.queryset.filter(email=self.request.data.get('email'))
    #     return qs

    def post(self, *args, **kwargs):
        data = self.request.data

        serialized_email = EmailSerializer(data=data)
        serialized_email.is_valid(raise_exception=True)
        user_email = serialized_email.data.get('email')
        user = get_object_or_404(UserModel, email=user_email)
        EmailService.recovery(user)
        return Response({'detail': 'Check your mail and follow instructions'}, status=status.HTTP_200_OK)


class ConfirmNewPasswordView(GenericAPIView):

    permission_classes = (AllowAny,)

    def post(self, *args, **kwargs):
        token = kwargs.get('token')
        data = self.request.data

        serialized_password = PasswordSerializer(data=data)
        serialized_password.is_valid(raise_exception=True)

        user: UserModelTyping = JwtService.validate_token(token, RefreshPassword)

        user.set_password(serialized_password.data.get('password'))
        user.save()
        return Response({'detail': 'Password change confirmed'}, status=status.HTTP_200_OK)
