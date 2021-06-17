from flask import render_template, request, session, redirect

from flask_app import app
from ..models.dog import Dog
from ..models.collar import Collar


@app.route("/collars/new")
def new_collar_form():
    return render_template("new_collar.html", all_dogs = Dog.get_all_dogs())


@app.route("/collars/create", methods = ['POST'])
def create_collar():
    print(request.form)
    Collar.create(request.form)

    return redirect('/')


@app.route('/collars/<int:collar_id>')
def show_collar(collar_id):
    return render_template("show_collar.html", collar = Collar.get_one_collar({'id': collar_id}))

