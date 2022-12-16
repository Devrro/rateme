# Generated by Django 4.1.4 on 2022-12-12 11:29

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermodel',
            name='login',
            field=models.CharField(max_length=20, unique=True, validators=[django.core.validators.MinLengthValidator(5), django.core.validators.MaxLengthValidator(20), django.core.validators.RegexValidator('^[a-z0-9]+$')]),
        ),
    ]
