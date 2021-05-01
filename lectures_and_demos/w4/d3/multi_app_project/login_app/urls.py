from django.urls import path

from . import views

urlpatterns = [
    # prepended with /login/
    path("", views.index), # /login/
    path("register", views.register), # /login/register
    path("login", views.login), # /login/login
    path("logout", views.logout), # /login/logout
]