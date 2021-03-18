from django.shortcuts import render, redirect

from .models import *

# Create your views here.

def index(request):
    context = {
        "dogs": Dog.objects.all() # is returns a list of everything in DB, a list of objects
    }

    return render(request, "index.html", context)


def create(request):
    Dog.objects.create(
        name = request.POST['name'],
        size = request.POST['size'],
        age = request.POST['age'],
        hair_color = request.POST['hair_color']
    )

    return redirect("/")


def toys(request):
    context = {
        "toys": Toy.objects.all(),
        "dogs": Dog.objects.all()
    }

    return render(request, "toys.html", context)


def create_toy(request):
    Toy.objects.create(
        name = request.POST['name'],
        texture = request.POST['texture'],
        size = request.POST['size'],
        dog = Dog.objects.get(id = request.POST['dog_id'])
    )

    return redirect("/toys")


def show_dog(request, dog_id):
    context = {
        "dog": Dog.objects.get(id = dog_id)
    }

    return render(request, "show_dog.html", context)




