# Generated by Django 3.2.8 on 2022-03-28 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizoApp', '0018_alter_quiz_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quiz',
            name='QuestionSet',
        ),
        migrations.AddField(
            model_name='quiz',
            name='QuestionSet',
            field=models.ManyToManyField(to='quizoApp.Question'),
        ),
    ]