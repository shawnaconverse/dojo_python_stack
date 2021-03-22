from django.shortcuts import render, redirect
from django.contrib import messages

from .models import *

# Create your views here.
def index(request):
    return redirect('/dogs')


def dogs(request):
    context = {
        "dogs": Dog.objects.all()
    }

    return render(request, "index.html", context)


def new_dog(request):
    return render(request, "new_dog.html")


def create_dog(request):
    errors = Dog.objects.validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            # creating Flash messages
            # Flash messages are messages that only exist for one cycle
            messages.error(request, value)

        return redirect("/dogs/new")
    else:
        dog = Dog.objects.create(
            name = request.POST['name'],
            hair_length = request.POST['hair_length'],
            hair_color = request.POST['hair_color']
        )

        return redirect(f"/dogs/{dog.id}")


def display_dog(request, id):
    context = {
        'dog': Dog.objects.get(id = id)
    }

    return render(request, "dog.html", context)


def delete_dog(request, id):
    dog = Dog.objects.get(id = id)
    dog.delete()

    return redirect('/dogs')
