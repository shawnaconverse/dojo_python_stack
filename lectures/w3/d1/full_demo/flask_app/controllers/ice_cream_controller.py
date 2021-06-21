from flask import render_template, request, session, redirect

from flask_app import app
from ..models.user import User
from ..models.ice_cream import IceCream


@app.route("/dashboard")
def dashboard():
    if "uuid" not in session:
        return redirect("/")

    return render_template("dashboard.html", user = User.get_by_id({"id": session['uuid']}))


@app.route("/ice_creams/new")
def new_ice_cream():
    if "uuid" not in session:
        return redirect("/")

    return render_template("new_ice_cream.html")


@app.route("/ice_creams/create", methods = ['POST'])
def create_ice_cream():
    if not IceCream.validate(request.form):
        return redirect("/ice_creams/new")
    
    data = {
        "flavor": request.form['flavor'],
        "topping": request.form['topping'],
        "cone": request.form['cone'],
        "user_id": session['uuid']
    }
    IceCream.create(data)

    return redirect("/dashboard")


@app.route("/ice_creams/<int:id>")
def display_ice_cream(id):
    if "uuid" not in session:
        return redirect("/")
    
    return render_template(
        "ice_cream.html",
        user = User.get_by_id({"id": session['uuid']}),
        ice_cream = IceCream.get_one({"id": id})
    )


@app.route("/ice_creams/<int:id>/delete")
def delete_ice_cream(id):
    IceCream.delete({"id": id})

    return redirect("/dashboard")


