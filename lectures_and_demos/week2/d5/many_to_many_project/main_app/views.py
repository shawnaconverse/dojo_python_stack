from django.shortcuts import render, redirect

from .models import *

# Create your views here.
def index(request):
    context = {
        "categories": Category.objects.all(),
        "products": Product.objects.all()
    }

    return render(request, "index.html", context)


def create_category(request):
    cat = Category.objects.create(
        name = request.POST['name'],
    )
    cat.products.add(Product.objects.get(id = request.POST['product_id']))

    return redirect("/")


def create_product(request):
    dog = Product.objects.create(
        name = request.POST['name'],
        price = request.POST['price']
    )
    dog.categories.add(Category.objects.get(id = request.POST["category_id"]))

    return redirect("/")


def show_category(request, id):
    context = {
        "category": Category.objects.get(id = id),
        "products": Product.objects.all()
    }

    return render(request, "show_category.html", context)


def show_product(request, id):
    context = {
        "product": Product.objects.get(id = id),
        "categories": Category.objects.all()
    }

    return render(request, "show_product.html", context)


def add_category(request, id):
    dog = Product.objects.get(id = id)
    dog.categories.add(Category.objects.get(id = request.POST["category_id"]))

    return redirect(f"/products/{id}")


def add_product(request, id):
    cat = Category.objects.get(id = id)
    cat.products.add(Product.objects.get(id = request.POST["product_id"]))

    return redirect(f"/categories/{id}")
