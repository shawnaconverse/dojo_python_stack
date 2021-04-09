from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse("Hello There!")


def display_dogs(request):
    return HttpResponse("My dogs are Vicky and Shiro")


def many_dogs(request, num):
    return HttpResponse(f"Dogs! {num}" * num)


def cats(request):
    return redirect("/redirected_cats") # it is making a new GET request on behalf of the client


def redirected_cats(request):
    return HttpResponse("I redirected to this route about cats.")


def display_page(request):
    # return render_template("index.html") - this is Flask
    # return render_template("index.html", dog = "Vicky") - this is Flask
    context = {
        "name": "Shawn",
        "age": 27,
        "basnanas": "Basnanas",
        "address": {
            "street": "123 Shawn St",
            "city": "San Jose",
            "state": "CA"
        },
        "interests": [
            "coding",
            "dogs",
            "food",
            "slappa da bass"
        ]
    }

    return render(request, "index.html", context)




