from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('dogs', views.dashboard),
    path("dogs/new", views.new_dog),
    path("dogs/create", views.create_dog),
    path("dogs/<int:id>", views.display_dog),
    path("dogs/<int:id>/edit", views.edit_dog),
    path("dogs/<int:id>/update", views.update_dog),
    path("dogs/<int:id>/delete", views.delete_dog),
    path("toys/<int:id>/<int:dog_id>/edit")
    # path("users/edit", views.edit_user)
]