import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect

from .models import User

# Create your views here.
def index(request):
    if "uuid" in request.session:
        return redirect("/dogs")

    return render(request, "login.html")


def register(request):
    errors = User.objects.registration_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)

        return redirect("/login")
    else:
        hash_slinging_slasher = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        new_user = User.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            email = request.POST['email'],
            birth_date = request.POST['birth_date'],
            password = hash_slinging_slasher
        )

        request.session['uuid'] = new_user.id

        return redirect("/dogs")


def login(request):
    errors = User.objects.login_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)

        return redirect("/login")
    else:
        user = User.objects.get(email = request.POST['email'])

        request.session['uuid'] = user.id

        return redirect("/dogs")


def logout(request):
    del request.session['uuid']

    return redirect("/login")

