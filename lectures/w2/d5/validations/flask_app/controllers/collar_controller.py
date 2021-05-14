from flask import render_template, redirect, request, session, flash

from flask_app import app
from ..models.collar import Collar
from ..models.dog import Dog

@app.route("/collars/new")
def new_collar_form():
    dogs = Dog.get_all_dogs()

    return render_template("new_collar.html", all_dogs = dogs)


@app.route("/collars/create", methods = ['POST'])
def create_collar():
    Collar.create(request.form)

    return redirect("/")

