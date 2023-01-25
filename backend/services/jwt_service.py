from typing import Type, Union

from django.contrib.auth import get_user_model

from rest_framework.generics import get_object_or_404

from rest_framework_simplejwt.tokens import BlacklistMixin, Token

from apps.users.models import UserModel as UserModelTyping

from core.enums.action_enums import ActionToken
from core.exceptions.jwt_exception import JwtException

UserModel: UserModelTyping = get_user_model()


class ActivateToken(BlacklistMixin, Token):
    lifetime = ActionToken.ACTIVATE.exp_time
    token_type = ActionToken.ACTIVATE.token_type


class RefreshPassword(BlacklistMixin, Token):
    lifetime = ActionToken.REFRESH_PASSWORD.exp_time
    token_type = ActionToken.REFRESH_PASSWORD.token_type


class JwtService:

    @staticmethod
    def create_token(user, token_class: Type[Union[Token, BlacklistMixin]]):
        return token_class.for_user(user)

    @staticmethod
    def validate_token(token, token_class: Type[Union[Token, BlacklistMixin]]):
        try:
            token_class = token_class(token)
            token_class.check_blacklist()
        except Exception:
            raise JwtException
        token_class.blacklist()

        user_id = token_class.payload.get('user_id')
        return get_object_or_404(UserModel, pk=user_id)
