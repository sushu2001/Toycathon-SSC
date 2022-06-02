from rest_framework.serializers import ModelSerializer 
from .models import Quiz
from .models import User
from .models import Profile
from .models import Question
class QuizSerializer(ModelSerializer):
    class Meta:
        model=Quiz 
        fields='__all__'

class QuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields='__all__'



class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','first_name', 'last_name', 'email']

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id','user_id','dob', 'gender', 'mobile_number']

