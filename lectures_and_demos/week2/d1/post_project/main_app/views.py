from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")


def process_form(request):
    # DICTs Key / Value Pairs
    # Name / Value Pairs
    # print(request.POST)
    # print(request.POST['name'])
    # print(request.POST['email'])
    # return HttpResponse("Something happened")
    context = {
        "name_from_form": request.POST['name'],
        "email_from_form": request.POST['email']
    }
    return render(request, "show.html", context)