# Generated by Django 3.2.8 on 2022-02-13 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizoApp', '0002_alter_user_info_domaintype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_info',
            name='domainType',
            field=models.CharField(max_length=50),
        ),
    ]
