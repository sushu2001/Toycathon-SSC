# Generated by Django 3.2.8 on 2022-03-12 05:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('quizoApp', '0007_auto_20220312_1045'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='content_approver_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='question',
            name='content_creator_id',
            field=models.OneToOneField(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
