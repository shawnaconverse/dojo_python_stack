from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path("dogs/create", views.create_dog),
    path("dogs/<int:dog_id>", views.display_dog)
    # /modelnameplural/CRUD
    # /dogs/new - /jedis/new - /lamps/new
    # /dogs/create - /lamps/create
]