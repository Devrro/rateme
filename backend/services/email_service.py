import os

from core.enums.email_enums import TemplateEnum
from services.jwt_service import ActivateToken, JwtService, RefreshPassword

from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template

from apps.users.models import UserModel as UserModelTyping


class EmailService:
    @staticmethod
    def _send_mail(to: str, template_name: str, context: dict, subject='', name: str = '') -> None:
        template = get_template(template_name=template_name)
        html_content = template.render(context)
        mail = EmailMultiAlternatives("Register", from_email=os.environ.get('EMAIL_HOST_USER'), to=[to])
        mail.attach_alternative(html_content, "text/html")
        mail.send()

    @classmethod
    def register(cls, user: UserModelTyping, name="Sign up"):
        token = JwtService.create_token(user, token_class=ActivateToken)
        url = f"{os.environ.get('FRONTEND_URL')}/activate/{token}"
        cls._send_mail(
            user.email,
            TemplateEnum.REGISTER.value,
            {'name': user.profile.first_name, 'link': url},
            name=name
        )

    @classmethod
    def recovery(cls, user: UserModelTyping,name='Recover password'):
        token = JwtService.create_token(user, token_class=RefreshPassword)
        url = f"{os.environ.get('FRONTEND_URL')}/recovery/{token}"
        cls._send_mail(
            user.email,
            TemplateEnum.RECOVERY.value,
            {'name': user.profile.first_name, 'link': url},
            name
        )
