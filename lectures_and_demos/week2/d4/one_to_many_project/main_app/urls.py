from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path("dogs/new", views.create),
    path("toys", views.toys),
    path("toys/new", views.create_toy),
    path("dogs/<int:dog_id>", views.show_dog)
]