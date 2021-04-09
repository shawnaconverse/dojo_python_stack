from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path("dogs", views.display_dogs),
    path("dogs/<int:num>", views.many_dogs),
    path("cats", views.cats),
    path("redirected_cats", views.redirected_cats),
    path("page", views.display_page)
]
