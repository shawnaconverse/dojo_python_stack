import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect

from .models import User

# Create your views here.
def index(request):
    return render(request, "index.html")


def register(request):
    errors = User.objects.registration_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)

        return redirect("/")
    else:
        hash_slinging_slasher = bcrypt.hashpw(request.POST['password'], bcrypt.gensalt()).decode()
        new_user = User.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            email = request.POST['email'],
            password = hash_slinging_slasher
        )

        request.session['uuid'] = new_user.id

        return redirect("/dashboard")


def login(request):
    user_list = User.objects.filter(email = request.POST['email'])
    if len(user_list) > 0:
        user = user_list[0]
        if bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()):
            request.session['uuid'] = user.id

            return redirect("/dashboard")
    return redirect("/")



def dashboard(request):
    pass

