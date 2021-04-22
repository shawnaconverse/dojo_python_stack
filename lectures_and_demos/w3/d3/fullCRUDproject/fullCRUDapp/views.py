import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect

from .models import User, Party

# Create your views here.
def index(request):
    if "uuid" in request.session:
        return redirect("/dashboard")

    return render(request, "index.html")


def register(request):
    errors = User.objects.registration_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)

        return redirect("/")
    else:
        hash_slinging_slasher = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        new_user = User.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            email = request.POST['email'],
            birth_date = request.POST['birth_date'],
            password = hash_slinging_slasher
        )

        request.session['uuid'] = new_user.id

        return redirect("/dashboard")


def login(request):
    errors = User.objects.login_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)

        return redirect("/")
    else:
        user = User.objects.get(email = request.POST['email'])

        request.session['uuid'] = user.id

        return redirect("/dashboard")


def logout(request):
    del request.session['uuid']

    return redirect("/")


def dashboard(request):
    if "uuid" not in request.session:
        return redirect("/")
    context = {
        "logged_in_user": User.objects.get(id = request.session['uuid']),
        "all_users": User.objects.all(),
        'all_parties': Party.objects.all()
    }

    return render(request, "dashboard.html", context)

# ********************************************** parties app below
def add_party_view(request):
    return render(request, 'createParty.html')

# CRUD C for create
def add_party_process(request):

    errors = Party.objects.party_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/party/new")
    else:
        logged_in_user = User.objects.get(id=request.session['uuid'])
        new_party = Party.objects.create(
            name = request.POST['name'],
            location = request.POST['loc'],
            party_master = logged_in_user,
            date = request.POST['date'],
            time = request.POST['time'],
            theme = request.POST['theme'],
        )
        return redirect('/dashboard')

# CRUD U for update
def update_party_view(request, party_id):
    context = {
        'party': Party.objects.get(id=party_id)
    }
    return render(request, 'editParty.html', context)

def update_party_process(request, party_id):
    party_to_update = Party.objects.get(id=party_id)
    party_to_update.name = request.POST['name']
    party_to_update.location = request.POST['loc']
    party_to_update.date = request.POST['date']
    # party_to_update.time = request.POST['time']
    party_to_update.theme = request.POST['theme']

    party_to_update.save()

    return redirect('/dashboard')

# CRUD D for delete
def delete_party_view(request, party_id):
    context = {
        "party": Party.objects.get(id=party_id)
    }
    return render(request, 'deletePartyConfirm.html', context)

def delete_party_process(request, party_id):
    party_to_delete = Party.objects.get(id=party_id)
    party_to_delete.delete()
    return redirect('/dashboard')