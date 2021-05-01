from django.urls import path

from . import views

urlpatterns = [
    # every route has /dogs/ prepended on it
    path("", views.index), # /dogs/
    path("new", views.new_dog), # /dogs/new
    path("create", views.create_dog), #/dogs/create
    path("<int:id>", views.display_dog) # /dogs/<int:id>
]