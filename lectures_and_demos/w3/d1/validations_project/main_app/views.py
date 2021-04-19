from django.shortcuts import render, redirect
from django.contrib import messages

from .models import Dog

# Create your views here.
def index(request):
    return render(request, "index.html")


def create_dog(request):
    errors = Dog.objects.validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/')
    else:
        new_dog = Dog.objects.create(
            name = request.POST['name'],
            age = request.POST['age']
        )
        return redirect(f"/dogs/{new_dog.id}")


def display_dog(request, dog_id):
    context = {
        "dog": Dog.objects.get(id = dog_id)
    }

    return render(request, "dog.html", context)

