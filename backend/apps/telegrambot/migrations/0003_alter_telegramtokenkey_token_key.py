# Generated by Django 4.1.4 on 2022-12-21 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegrambot', '0002_alter_telegramtokenkey_token_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='telegramtokenkey',
            name='token_key',
            field=models.CharField(default='vK4nVjWxTz-dRZUO3GMDjg', max_length=64),
        ),
    ]
