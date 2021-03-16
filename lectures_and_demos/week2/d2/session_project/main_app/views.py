from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")


def process(request):
    if request.POST["which_form"] == "register":
        # handle the register
        print(request.POST['name'])
        print(request.POST['email'])
        print(request.POST['password'])

    elif request.POST["which_form"] == "login":
        # handle login
        print(request.POST['email'])
        print(request.POST['password'])
    
    else:
        return redirect("/")
    # print("Hello There") 
    # request.session['name'] = request.POST['name']
    # request.session["email"] = request.POST['email']
    # request.session['password'] = request.POST['password']
    # print(request.session) # is just a disctionary
    # print(request.session['name'])
    # print(request.session['email'])
    # print(request.session['password'])
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