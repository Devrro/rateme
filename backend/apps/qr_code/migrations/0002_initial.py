# Generated by Django 4.1.3 on 2022-12-01 21:32

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('qr_code', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='publicplacemodel',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='addressmodel',
            name='public_place',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='qr_code.publicplacemodel'),
        ),
    ]