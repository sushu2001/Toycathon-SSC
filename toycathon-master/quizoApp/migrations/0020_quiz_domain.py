# Generated by Django 3.2.8 on 2022-03-31 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizoApp', '0019_auto_20220328_2312'),
    ]

    operations = [
        migrations.AddField(
            model_name='quiz',
            name='domain',
            field=models.CharField(default='', max_length=100),
        ),
    ]
