from django.contrib import admin
from django.urls import path, include, re_path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register_attempt/', views.register_attempt),
    path('success/', views.success),
    path('login_attempt/', views.login_attempt),
    path('verify/<auth_token>' , views.verify , name="verify"),
    path('AddQuestion/',views.addQuestion),
    path('AddQuiz/',views.addQuiz),
    path('notes/',views.getNotes,name="notes"),
    path('notes/<str:pk1>/',views.getNoteQuestions,name="note"),
    path('users/', views.getUsers, name = "users"),
    path('users/<str:pk>/', views.getUser, name = "user"),
    path('profile/<str:pk>/', views.getUserProfile, name = "profile"),
    path('questions/',views.getQuestions, name = "questions"),
    path('questions/<str:pk>/',views.getQuestion, name = "question"),
    path('gotoProfile/', views.goToProfile),
    path('logout/',views.logout_view),
   
    # path("SaveQuiz/", views.saveQuiz),
]
urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name = 'index.html')),
]
