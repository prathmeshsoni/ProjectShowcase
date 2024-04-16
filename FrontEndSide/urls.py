from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('<str:url>/', views.project_details, name='project_details'),
]