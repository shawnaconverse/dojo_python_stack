from django.shortcuts import render, redirect

from .models import *

# Create your views here.
def index(request):
    context = {
        "dogs": Dog.objects.all() # gives me a list
    }

    return render(request, 'index.html', context)


def create_dog(request):
    print(request.POST)

    Dog.objects.create(
        name = request.POST['jasjdjlkfasfhas'],
        breed = request.POST['breed'],
        size = request.POST['size'],
        hair_color = request.POST['hair_color'],
        favorite_toy = request.POST['toy']
    )

    return redirect("/")


