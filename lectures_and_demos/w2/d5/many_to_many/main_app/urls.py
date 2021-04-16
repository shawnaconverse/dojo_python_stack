from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path('jedis/create', views.create_jedi),
    path("jedis/<int:jedi_id>", views.display_jedi),
    path("jedis/<int:jedi_id>/add_power", views.add_power),
    path("jedis/<int:jedi_id>/remove_power/<int:power_id>", views.remove_power)
]