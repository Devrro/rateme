# Generated by Django 4.1.4 on 2022-12-12 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviewmodel',
            name='customer_name',
            field=models.CharField(blank=True, max_length=64),
        ),
        migrations.AlterField(
            model_name='reviewmodel',
            name='customer_review',
            field=models.TextField(blank=True, max_length=1000),
        ),
    ]
