from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    print("testing method")
    return HttpResponse("test")

def name(request, s):
    print("test name")
    return HttpResponse(f"your name is {s}")

def dogs(request):
    print("good")
    return HttpResponse("dogs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

def cats(request):
    print("bad")
    return HttpResponse("lunch")