from django.urls import path
from . import views

urlpatterns = [
    # Django auto appends the '/'
    path('', views.index),
    path('success', views.success),
    # path('<str:word>', views.path_word),
    path("path", views.path),
    path("redirected_path", views.redirect_path),
    # path('<str:word>/<str:color>', views.display_color),
    path("dogs", views.dogs)
]

# @app.route("/")
# def index():
#     pass

# @app.route("/success")
# def success():
#     pass

# @app.route("/<word>")
# def path_word(word):
#     pass

