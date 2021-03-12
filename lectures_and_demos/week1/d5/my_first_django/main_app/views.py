from django.shortcuts import render, HttpResponse, redirect


# Create your views here.
def index(request):
    return HttpResponse("Hello There")


def success(request):
    return HttpResponse("success!")


# def path_word(request, word):
#     return HttpResponse(f"You're word is: {word}")


def path(request):
    return redirect("/redirected_path")


def redirect_path(request):
    return HttpResponse("This function ran after a redirect!")


def dogs(request):
    context = {
        "dogs": ["vicky", "shiro", "kenobi"],
        "name": "Shawn Converse"
    }

    return render(request, "dogs.html", context)


