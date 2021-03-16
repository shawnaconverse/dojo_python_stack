from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")


def process(request):
    # print("Hello There") 
    request.session['name'] = request.POST['name']
    request.session["email"] = request.POST['email']
    print(request.session) # is just a disctionary
    print(request.session['name'])
    print(request.session['email'])
    return redirect("/show") # NEW GET REQUEST


def show(request):
    if "name" not in request.session:
        name = "DEFAULT"
    else:
        name = request.session["name"]
    if "email" not in request.session:
        email = "DEFAULT@test.com"
    else:
        email = request.session["email"]
    context = {
        "name" : name,
        "email": email
    }
    return render(request, "show.html")


def clear(request):
    del request.session['name']
    del request.session['email']
    return redirect("/")


# def logout(request):
    # DO I NEED TO SUBMIT A FORM TO LOGOUT
    # LOGOUT IS USUALLY JUST A LINK OR A BUTTON
    # GET REQUEST
    # REDIRECT A LOGIN PAGE