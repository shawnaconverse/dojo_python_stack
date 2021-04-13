from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")


def process(request):
    print(request.POST)
    print(request.session)

    # some_dict = {}
    # some_dict['dog'] = "Vicky"
    
    if request.POST['which_form'] == "register":
        print(request.POST['name'])
        print(request.POST['email'])
        print(request.POST['password'])
        request.session['name'] = request.POST['name']
        request.session['email'] = request.POST['email']
    elif request.POST['which_form'] == "login":
        print(request.POST['email'])
        print(request.POST['password'])
    else:
        print("Stop changing my website you jerk")
        return redirect("/")
    

    return redirect("/another")


def another(request):
    if "name" in request.session:
        var_name = request.session['name']
    else:
        var_name = "Lamppost"
    if "email" not in request.session:
        var_email = "lampost@lamp.com"
    else:
        var_email = request.session['email']

    context = {
        "name": var_name,
        "email": var_email
    }
    return render(request, "another.html", context)


def delete(request):
    del request.session['name']
    del request.session['email']

    return redirect("/")


