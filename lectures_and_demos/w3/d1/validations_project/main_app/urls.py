from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path("dogs", views.all_dogs),
    path("dogs/new", views.new_dog),
    path("dogs/create", views.create_dog),
    path("dogs/<int:dog_id>", views.display_dog),
    path("dogs/<int:dog_id>/edit", views.edit_dog),
    path("dogs/<int:dog_id>/update", views.update_dog),
    path("dogs/<int:dog_id>/delete", views.delete_dog)
    # /modelnameplural/CRUD
    # /dogs/new - /jedis/new - /lamps/new
    # /dogs/create - /lamps/create
]