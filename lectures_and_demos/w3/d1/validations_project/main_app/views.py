from django.shortcuts import render, redirect
from django.contrib import messages

from .models import Dog

# Create your views here.
def index(request):
    return redirect("/dogs")


def all_dogs(request):
    context = {
        "all_dogs": Dog.objects.all()
    }

    return render(request, "all_dogs.html", context)


def new_dog(request):
    return render(request, "new_dog.html")


def create_dog(request):
    errors = Dog.objects.validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/dogs/new')
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


def edit_dog(request, dog_id):
    context = {
        "dog": Dog.objects.get(id = dog_id)
    }

    return render(request, "edit_dog.html", context)


def update_dog(request, dog_id):
    errors = Dog.objects.validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        
        return redirect(f"/dogs/{dog_id}/edit")
    else:
        dog = Dog.objects.get(id = dog_id)
        dog.name = request.POST['name']
        dog.age = request.POST['age']
        dog.save()

        return redirect(f"/dogs/{dog_id}")


def delete_dog(request, dog_id):
    dog = Dog.objects.get(id = dog_id)
    dog.delete()

    return redirect("/dogs")


