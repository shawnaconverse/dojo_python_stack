from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path("categories/create", views.create_category),
    path("categories/<int:id>/add_product", views.add_product),
    path("categories/<int:id>", views.show_category),
    path("products/create", views.create_product),
    path("products/<int:id>/add_category", views.add_category),
    path("products/<int:id>", views.show_product)

]