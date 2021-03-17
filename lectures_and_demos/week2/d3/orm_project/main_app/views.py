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
        hair_color = request.POST['hair_color'],
        favorite_treat = request.POST['favorite_treat']
    )

    return redirect("/")