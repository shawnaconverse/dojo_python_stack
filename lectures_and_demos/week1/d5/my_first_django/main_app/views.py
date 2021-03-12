from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Hello World")


def success(request):
    return HttpResponse("success!")


def path_word(request, word):
    return HttpResponse(f"You're word is: {word}")

