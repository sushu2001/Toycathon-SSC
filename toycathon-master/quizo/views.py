from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
import pymongo
from verify_email.email_handler import send_verification_email # added
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib import messages
from quizoApp.models import *
from quizoApp.models import Quiz
import uuid
from django.conf import settings
from django.core.mail import send_mail
from django.contrib.auth import authenticate,login
from django.contrib.auth.decorators import login_required
from quizoApp.serializer import QuizSerializer
from quizoApp.models import User
from quizoApp.serializer import UserSerializer
from quizoApp.models import Profile
from quizoApp.serializer import ProfileSerializer
from quizoApp.models import Question
from quizoApp.serializer import QuestionSerializer
from django.contrib.auth import logout
import googletrans
from googletrans import Translator
from django.views.decorators.csrf import csrf_exempt
# from .question123 import Question


@csrf_exempt
def login_attempt(request):
    if request.method=='POST':
        username = request.POST['name']
        password = request.POST['password']

        user_obj = User.objects.filter(username = username).first()

        profile_obj = Profile.objects.filter(user = user_obj ).first()
        if profile_obj is None:
            return redirect('/error')

        if not profile_obj.is_verified:
            return redirect('/error')
            
        user = auth.authenticate(username= username, password = password)


        if user is not None:
            auth.login(request, user)
            if(user_obj.id == profile_obj.user_id and profile_obj.isCreator):
                return redirect('/cc_dash/')
            return redirect('/prac/')
        else:
            #print message
            return HttpResponse("Invalid credentials")
    return redirect('/login/')

@csrf_exempt
def logout_view(request):
    if request.method=='POST':
        logout(request)
        return redirect('/')
    return redirect('/error')

@csrf_exempt
def register_attempt(request):
    if request.method=='POST': 
        first_name = request.POST['fname']
        last_name = request.POST['lname']
        email = request.POST['email']
        mobile_number = request.POST['phn_no']
        dob = request.POST['dob']
        gender = request.POST['gender']
        role = request.POST['role']
        user_name = request.POST['username']
        password = request.POST['pass']
        confirmpassword = request.POST['confpass']
        if password == confirmpassword:
            if User.objects.filter(username = user_name).exists():
                return HttpResponse('Username taken')
            elif User.objects.filter(email = email).exists():
                return HttpResponse("Email taken")
            else:
                isStudent = False
                isCreator = False
                isApprover = False
                user_obj = User.objects.create_user(username = user_name, password = password, email = email, first_name = first_name, last_name = last_name)
                if(role == 'student'):
                    isStudent = True
                if(role == 'creator'):
                    isStudent = True
                    isCreator = True
                if(role == "approver"):
                    isStudent = True
                    isCreator = True
                    isApprover = True

                auth_token = str(uuid.uuid4())
                profile_obj = Profile.objects.create(user = user_obj, id = user_name,dob = dob, gender = gender, mobile_number = mobile_number, isStudent = isStudent, isCreator = isCreator, isApprover = isApprover, auth_token = auth_token )
                user_obj.save()
                profile_obj.save()
                send_mail_after_registration(email , auth_token)
                return  HttpResponse('Token send') ## message
        else:
            return HttpResponse('Password is not matching') ## message
    return redirect('/register/')

def success(request):
    return HttpResponse('Thank you for registration')


def send_mail_after_registration(email , token):
    subject = 'Your accounts need to be verified'
    message = f'Hi paste the link to verify your account http://127.0.0.1:8000/verify/{token}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message , email_from ,recipient_list )

def verify(request , auth_token):
    try:
        profile_obj = Profile.objects.filter(auth_token = auth_token).first()
        if profile_obj:
            if profile_obj.is_verified:
                messages.success(request, 'Your account is already verified.')
                return redirect('/login')
            profile_obj.is_verified = True
            profile_obj.save()
            messages.success(request, 'Your account has been verified.')
            return redirect('/login')
        else:
            return HttpResponse("Error") #message
    except Exception as e:
        print(e)
        return redirect('/')

@csrf_exempt
def forgot_pass_attempt(request):
    if request.method=='POST':
        email = request.POST['email']

        user_obj = User.objects.filter(email = email).first()

        profile_obj = Profile.objects.filter(user = user_obj ).first()
        if profile_obj is None:
            messages.success(request, "No user found.")
            return redirect('/for_pass/')
        
        token = str(uuid.uuid4())
        profile_obj.forgot_password_token=token
        profile_obj.save()
        send_forgot_password_mail(email,token)

        messages.success(request, "Email has been sent.")
        return redirect('/for_pass/')
           

def ChangePassword(request,forgot_token):
    try:
        profile_obj = Profile.objects.filter(forgot_password_token = forgot_token).first()

        if profile_obj is None:
            messages.success(request, "No user found.")
            return redirect('/for_pass/')

        userid=profile_obj.user.id

        if(requests.method=='POST'):
            new_password = request.POST['new_password']
            confirm_password = request.POST['confirm_password']

            if(new_password!=confirm_password):
                messages.success(request, "Both password should be same.")
                return redirect(f'change_password/{token}')
            
            user_obj = User.objects.get(id=userid)
            user_obj.set_password(new_password)
            user_obj.save()
            return redirect('/login/')
    except:
        return redirect('/for_pass/')


def send_forgot_password_mail(email,token):
    subject = 'Your forgot passwork link'
    message = f'Hi click on the link to reset the password http://127.0.0.1:8000/change_password/{token}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message , email_from ,recipient_list )

# Function for taking Question from frontend and adding it to database

@csrf_exempt
def addQuiz(request):
    if request.method=='POST':
        q_no = request.POST['Enter_q_name']
        des = request.POST['Enter_q_des']
        mode = "Public"
        addQuiz.var = q_no
        add_Quiz_obj = Quiz.objects.create(id = q_no, domain = des,Mode = mode)
        add_Quiz_obj.save()
        
        return redirect('/create_q/')
    return HttpResponse('/error/')

def addQuestion(request):
    if request.method=='POST':
        print(request.POST)
        q_no = request.POST['que_no']
        SetTime = request.POST['SetTime']
        max_points = int(request.POST['max_points'])
        Enter_question = request.POST['Enter_question']
        answer = request.POST['answer']
        translator = Translator()
        answer1 = translator.translate(answer, src="hi", dest="en").text
        difficultyLevel = 1
        description = "None"
        content_creator_id_id = request.user.id
        add_Question_obj = Question.objects.create(question = Enter_question, ques_no = q_no,answer = answer1.lower(), Marks = max_points,DifficultyLevel = difficultyLevel, created_at = SetTime, updated_at = SetTime, description = description,content_creator_id_id=content_creator_id_id,content_approver_id_id=-1)
        quiz_object = Quiz.objects.filter(id = addQuiz.var).first()
        quiz_object.QuestionSet.add(add_Question_obj)
        add_Question_obj.save()
        quiz_object.save()
        return redirect('/create_q/')
    return HttpResponse('/error/')




def goToProfile(request):
    # a = '/prof/'+request.user.username+'/'
    # return redirect(a)
    if request.method=='POST':
        a = '/prof/'+request.user.username+'/'
        return redirect(a)
    return HttpResponse('/error/')
    
@api_view(['GET'])
def getNotes(request):
    notes=Quiz.objects.all()
    serializer=QuizSerializer(notes,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request,pk):
    notes=Quiz.objects.get(id=pk)
    serializer=QuizSerializer(notes,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getNoteQuestions(request, pk1):
    users = Quiz.objects.filter(id=pk1)
    questions = users.values_list("QuestionSet")
    a = []
    for i in range(0, len(questions)):
        quest = Question.objects.get(question_id = questions[i][0])
        serializer1 = QuestionSerializer(quest, many = False)
        a.append(serializer1.data)

    return Response(a) 

@api_view(['GET'])
def getQuestions(request):
    quest = Question.objects.all()
    serializer=QuestionSerializer(quest,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getQuestion(request,pk):
    quest=Question.objects.get(question_id=pk)
    serializer=QuestionSerializer(quest,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request, pk):
    #users = User.objects.get(id = pk)
    users = User.objects.filter(username = pk).first()
    serializer = UserSerializer(users, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def getUserProfile(request, pk):
    usersProfile = Profile.objects.get(id = pk)
    usersProfile = Profile.objects.get(id = pk)
    
    serializer = ProfileSerializer(usersProfile, many = False)
    return Response(serializer.data)

