from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path("register", views.register),
    path("login", views.login),
    path("logout", views.logout),
    path("dashboard", views.dashboard),
    # ********* parties app below ***************
    # Dislay Routes
    path('party/new', views.add_party_view),
    # path('add_party_view', views.add_party_view),
    path('party/<int:party_id>/edit', views.update_party_view),
    # path('update_party_view/<int:party_id>', views.update_party_view),
    path('party/<int:party_id>/confirm', views.delete_party_view),
    # path('delete_party_view/<int:party_id>', views.delete_party_view),

    # Action Routes
    path('party/create', views.add_party_process),
    # path('add_party_process', views.add_party_process),
    path('party/<int:party_id>/update', views.update_party_process),
    # path('update_party_process/<int:party_id>', views.update_party_process),
    path('party/<int:party_id>/destroy', views.delete_party_process),
    # path('delete_party_process/<int:party_id>', views.delete_party_process),
]