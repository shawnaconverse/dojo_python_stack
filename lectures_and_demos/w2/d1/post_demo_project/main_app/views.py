from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, "index.html")


def success(request):
    print(request.POST) # is just a dictionary

    print(request.POST['name'])
    print(request.POST['breed'])
    print(request.POST['hair_color'])

    context = {
        "dog_name": request.POST['name'],
        "dog_breed": request.POST['breed'],
        "hair_color": request.POST['hair_color']
    }

    return render(request, "dog.html", context)

