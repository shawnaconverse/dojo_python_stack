from django.shortcuts import render, HttpResponse, redirect

from login_app.models import User

# Create your views here.
def index(request):
    print(request.method)
    user = User.objects.get(id = request.session['uuid'])
    
    context = {
        "logged_in_user": User.objects.get(id = request.session['uuid'])
    }
    return render(request, "dogs.html", context)
    # return HttpResponse("this is the login app")


def new_dog(request):
    print(request.method)

    if request.method == "GET":
        print("I got here from a GET request")
    
    if request.method == "POST":
        print("Tyler really likes tapioca pudding.")

    return redirect("/dogs/")


def create_dog(request):
    if request.method == "GET":
        return redirect("/dogs")
    
    # createing a dog with post data
    pass


def display_dog(request):
    pass


