from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.validators import MaxLengthValidator, MinLengthValidator, RegexValidator
from django.db import models

from .managers import UserManager
from .services import upload_to

ukraine_phone_number_validator = r'^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$'
user_name_regex = r'^[a-z0-9]+$'


class UserModel(AbstractBaseUser, PermissionsMixin):
    class Meta:
        db_table = 'users'

    login = models.CharField(
        max_length=20,
        validators=[
            MinLengthValidator(5),
            MaxLengthValidator(20),
            RegexValidator(user_name_regex)
        ],
        unique=True, blank=False, null=False)
    email = models.EmailField(
        unique=True,
        blank=False,
        null=False,
    )
    password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'login'
    objects = UserManager()



class ProfileModel(models.Model):
    class Meta:
        db_table = 'profile'

    first_name = models.CharField(max_length=32, blank=False)
    last_name = models.CharField(max_length=32, blank=False)
    phone_number = models.CharField(
        unique=True,
        validators=[
            RegexValidator(ukraine_phone_number_validator),
            MaxLengthValidator(13),
            MinLengthValidator(13)
        ],
    ),
    birth_date = models.DateField()
    avatar = models.ImageField(upload_to=upload_to, blank=True, null=False)
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='profile')
