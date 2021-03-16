from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('process', views.process),
    path('show', views.show),
    path('clear', views.clear)
]