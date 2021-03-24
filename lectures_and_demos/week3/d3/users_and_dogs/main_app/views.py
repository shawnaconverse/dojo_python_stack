import bcrypt
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
        return redirect('/dogs')


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
        return redirect('/dogs')


def logout(request):
    del request.session['uuid']
    return redirect("/")


def dashboard(request):
    context = {
        'user': User.objects.get(id = request.session['uuid']),
        "dogs": Dog.objects.all()
    }
    return render(request, "dashboard.html", context)


def new_dog(request):
    context = {
        'user': User.objects.get(id = request.session['uuid'])
    }

    return render(request, "new_dog.html", context)


def create_dog(request):
    errors = Dog.objects.validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/dogs/new")
    else:
        dog = Dog.objects.create(
            name = request.POST['name'],
            age = request.POST['age'],
            hair_color = request.POST['hair_color'],
            owner = User.objects.get(id = request.session['uuid'])
        )

        return redirect("/dogs")


def display_dog(request, id):
    context = {
        'user': User.objects.get(id = request.session['uuid']),
        "dog": Dog.objects.get(id = id)
    }
    return render(request, "dog.html", context)


def edit_dog(request, id):
    context = {
        'user': User.objects.get(id = request.session['uuid']),
        "dog": Dog.objects.get(id = id)
    }
    return render(request, "edit_dog.html", context)


def update_dog(request, id):
    errors = Dog.objects.validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"/dogs/{id}/edit")
    else:
        dog = Dog.objects.get(id = id)
        dog.name = request.POST['name']
        dog.age = request.POST['age']
        dog.hair_color = request.POST['hair_color']
        dog.save()

        return redirect("/dogs")


def delete_dog(request, id):
    dog = Dog.objects.get(id = id)
    dog.delete()

    return redirect('/dogs')




