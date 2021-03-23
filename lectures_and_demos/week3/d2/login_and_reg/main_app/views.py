import bcrypt
from datetime import datetime
from django.shortcuts import render, redirect
from django.contrib import messages


from .models import *

DAYS_FOR_13_YEARS = 410248800

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
    users_list = User.objects.filter(email = request.POST['email']) #FILTER RETURNS A LIST
    if len(users_list) > 0:
        logged_user = users_list[0]
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['uuid'] = logged_user.id
            return redirect('/dashboard')
    return redirect('/')



def logout(request):
    del request.session['uuid']
    return redirect("/")


def dashboard(request):
    context = {
        'user': User.objects.get(id = request.session['uuid'])
    }
    return render(request, "dashboard.html", context)