# Generated by Django 4.1.3 on 2022-11-30 11:03

import apps.qr_code.services
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AddressModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(choices=[('UA', 'Ukraine')], max_length=30)),
                ('city', models.CharField(max_length=64)),
                ('street', models.CharField(max_length=64)),
                ('street_number', models.IntegerField()),
                ('zipcode', models.IntegerField()),
            ],
            options={
                'db_table': 'address',
            },
        ),
        migrations.CreateModel(
            name='PublicPlaceModel',
            fields=[
                ('id', models.BigAutoField(default=uuid.uuid1, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('working_time_start', models.DateTimeField(blank=True)),
                ('working_time_end', models.DateTimeField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'url',
            },
        ),
        migrations.CreateModel(
            name='QrModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qr_url', models.CharField(max_length=255)),
                ('qr_code', models.ImageField(upload_to=apps.qr_code.services.save_qr_to)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('public_place', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='qr_code.publicplacemodel')),
            ],
            options={
                'db_table': 'qr_code',
            },
        ),
    ]