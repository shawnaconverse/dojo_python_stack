from django.shortcuts import render, HttpResponse, redirect
# from django.http import JsonResponse

# Create your views here.
def index(request):
    context = {
        "dogs": ["vicky", "shiro", "kenobi", "oni", "artemis"]
    }
    return render(request, "index.html", context)
    # What is JSON - JavaScript Object Notation
    # JS Object = {}, key/value pairs
    # Python calls it dictionaries
    # json = {
    #     "name": "Shawn",
    #     "age": 27
    # }
    # return JsonResponse(json, safe=False)


def process_form(request):
    # DICTs Key / Value Pairs
    # Name / Value Pairs
    # print(request.POST)
    # print(request.POST['name'])
    # print(request.POST['email'])
    # return HttpResponse("Something happened")
    print(request.POST)
    print(f"Name: {request.POST['name']} which is type of: {type(request.POST['name'])}")
    print(f"Age: {request.POST['age']} which is type of: {type(request.POST['age'])}")
    print(f"Email: {request.POST['email']} which is type of: {type(request.POST['email'])}")
    print(f"Favorite Dog: {request.POST['favorite_dog']} which is type of: {type(request.POST['favorite_dog'])}")
    print(f"Favorite Skit: {request.POST['favorite_skit']} which is type of: {type(request.POST['favorite_skit'])}")
    print(f"Knights: {request.POST['knights']} which is type of: {type(request.POST['knights'])}")
    print(f"Comment: {request.POST['comment']} which is type of: {type(request.POST['comment'])}")
    context = {
        "name_from_form": request.POST['name'],
        "email_from_form": request.POST['email']
    }
    return render(request, "show.html", context)


def sandwiches(request):
    return HttpResponse("You got a sandwich!")


