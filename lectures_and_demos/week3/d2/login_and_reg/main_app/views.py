import bcrypt
from datetime import datetime
from django.shortcuts import render, redirect
from django.contrib import messages


from .models import *


# Create your views here.
def index(request):
    return render(request, "index.html")


def register(request):
    print(request.POST)
    errors = User.objects.register_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        
        return redirect("/")
    
    else:
        hash_browns = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        user = User.objects.create(
            first_name = request.POST["first_name"],
            last_name = request.POST["last_name"],
            email = request.POST["email"],
            birth_date = request.POST["birth_date"],
            password = hash_browns
        )
        request.session['uuid'] = user.id
        return redirect('/dashboard')


def login(request):
    errors = User.objects.login_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        
        return redirect("/")
    else:
        user_list = User.objects.filter(email = request.POST['email'])
        user = user_list[0]
        request.session['uuid'] = user.id
        return redirect('/dashboard')


def logout(request):
    del request.session['uuid']
    return redirect("/")


def dashboard(request):
    context = {
        'user': User.objects.get(id = request.session['uuid'])
    }
    return render(request, "dashboard.html", context)