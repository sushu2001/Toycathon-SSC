from django.db import models
from django.contrib.auth.models import User
from djongo import models as md
# from django import forms
# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    auth_token = models.CharField(max_length = 100,default=False )
    id = models.CharField(max_length = 20, primary_key = True)
    dob = models.DateField()
    gender = models.CharField(max_length = 7)
    mobile_number = models.BigIntegerField()
    isStudent = models.BooleanField()
    isCreator = models.BooleanField()
    isApprover = models.BooleanField()
    is_verified = models.BooleanField(default=False)
    forgot_password_token = models.CharField(max_length=100, default=False)
    # Array of Quiz id and score
    def _str_(self):
        return self.user.username
def from_1():
    largest = Question.objects.all().order_by('question_id').last()
    if not largest:
        return 1
    return largest.question_id + 1
class Question(models.Model):
    question_id = models.IntegerField(primary_key=True, default=from_1)
    ques_no = models.IntegerField(default=1)
    question = models.CharField(max_length = 20, default = "")
    answer = models.CharField(max_length = 30, default = "")
    Marks = models.IntegerField(default = 0)
    content_creator_id = models.OneToOneField(User, on_delete=models.CASCADE, default = 0, related_name = "creator")
    content_approver_id = models.OneToOneField(User, on_delete=models.CASCADE, default = 0, related_name = "approver")
    DifficultyLevel = models.IntegerField(default = 0)
    description = models.CharField( max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
class Quiz(models.Model):
    id = models.CharField(max_length = 100, default ="", primary_key = True)
    Mode=models.CharField(max_length=10)
    private_code=models.CharField(max_length=10, default = -1)
    startTime=models.TimeField()
    endTime=models.TimeField()
    QuestionSet = models.ManyToManyField(Question)
    domain = models.CharField(max_length = 100, default="")
    def _str_(self):
        return self.id