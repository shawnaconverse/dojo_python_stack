from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path("register", views.register),
    path("login", views.login),
    path("logout", views.logout),
    # Read many
    path("dogs", views.dashboard),
    # Create
    path("dogs/new", views.new_dog),
    path("dogs/create", views.create_dog),
    # Read One
    path("dogs/<int:dog_id>", views.display_dog),
    # Update
    path("dogs/<int:dog_id>/edit", views.edit_dog),
    path("dogs/<int:dog_id>/update", views.update_dog),
    # Delete
    path("dogs/<int:dog_id>/delete", views.delete_dog),
]