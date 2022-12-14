# Generated by Django 4.1.4 on 2022-12-16 10:59

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TelegramTokenKey',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token_key', models.CharField(default='b6VbzktG2VV01P0zLIyGxA', max_length=64)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='token_key', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'telegram_token_keys',
            },
        ),
    ]
