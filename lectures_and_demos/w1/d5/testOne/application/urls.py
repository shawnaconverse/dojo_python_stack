from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('name/<int:s>', views.name),
    path('dogs', views.dogs),
    path('cats', views.cats),
]
