from django.shortcuts import render, redirect

from .models import Jedi, ForcePower

# Create your views here.
def index(request):
    context = {
        "all_jedis": Jedi.objects.all()
    }

    return render(request, "index.html", context)


def create_jedi(request):
    print(request.POST)

    if "master" in request.POST:
        master = True
    else:
        master = False

    # print(f"The checkbox says {master}")

    Jedi.objects.create(
        name = request.POST['name'],
        light_saber_color = request.POST['color'],
        age = request.POST['age'],
        is_master = master
    )

    return redirect("/")


def display_jedi(request, jedi_id):
    context = {
        "jedi": Jedi.objects.get(id = jedi_id),
        "force_powers": ForcePower.objects.all()
    }

    return render(request, "jedi.html", context)


def add_power(request, jedi_id):
    this_jedi = Jedi.objects.get(id = jedi_id)
    this_power = ForcePower.objects.get(id = request.POST['power_id'])

    this_jedi.force_powers.add(this_power)

    return redirect(f"/jedis/{jedi_id}")


def remove_power(request, jedi_id, power_id):
    this_jedi = Jedi.objects.get(id = jedi_id)
    this_power = ForcePower.objects.get(id = power_id)

    this_jedi.force_powers.remove(this_power)

    return redirect(f"/jedis/{jedi_id}")


