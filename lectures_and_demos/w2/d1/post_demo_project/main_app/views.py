from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    context = {
        "toys": [
            "rope",
            "squeekie",
            "ball",
            "water bottle",
            "house shoe",
            "snuffle mat"
        ]
    }

    return render(request, "index.html", context)


def success(request):
    print(request.POST) # is just a dictionary

    # print(request.POST['name'])
    # print(request.POST['breed'])
    # print(request.POST['hair_color'])
    # if 'favorite_meat' in request.POST:
    #     print(request.POST['favorite_meat'])
    # else:
    #     print("Favorite meat key not in dictionary")
    # if request.POST.get("size"):
    #     print(request.POST['size'])
    print(request.POST.get("favorite_meat"))
    print(request.POST.get('size'))
    if not request.POST.get('size'):
        print("you did it wrong")
        return redirect("/")

    context = {
        "dog_name": request.POST['name'],
        "dog_breed": request.POST['breed'],
        "hair_color": request.POST['hair_color']
    }

    return  redirect("/display") # Making a new GET request


def display(request):
    return render(request, "dog.html")
