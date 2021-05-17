from flask import render_template, request, redirect, session

from flask_app import app
from ..models.user import User
from ..models.ice_cream import IceCream

# Home page to display the ice creams the logged in user has made
@app.route("/dashboard")
def dashboard():
    if 'uuid' not in session:
        return redirect("/")

    return render_template("dashboard.html", user = User.get_by_id({"id": session['uuid']}))


# CREATE
# display the form for create
@app.route("/ice_creams/new")
def new_ice_cream():
    if 'uuid' not in session:
        return redirect("/")

    return render_template("new_ice_cream.html", user = User.get_by_id({"id": session['uuid']}))


# route to handle the post request of creating an ice cream
@app.route("/ice_creams/create", methods = ['POST'])
def create_ice_cream():
    if not IceCream.validator(request.form):
        return redirect("/ice_creams/new")

    sprinkles = 0
    if "sprinkles" in request.form:
        sprinkles = 1

    data = {
        "user_id": session['uuid'],
        "flavor": request.form['flavor'],
        "cone": request.form['cone'],
        "sprinkles": sprinkles
    }
    IceCream.create(data)

    return redirect("/dashboard")


# READ ONE
@app.route("/ice_creams/<int:id>")
def display_ice_cream(id):
    if 'uuid' not in session:
        return redirect("/")
    
    return render_template("show_ice_cream.html", ice_cream = IceCream.get_one({"id": id}))


# UPDATE
# display the form for update
@app.route("/ice_creams/<int:id>/edit")
def edit_ice_cream(id):
    if 'uuid' not in session:
        return redirect("/")
    
    return render_template(
        "edit_ice_cream.html",
        ice_cream = IceCream.get_one({"id": id}),
        user = User.get_by_id({"id": session['uuid']})
    )


# route to handle the post request of updated an ice cream
@app.route("/ice_creams/<int:id>/update",  methods = ["POST"])
def update_ice_cream(id):
    if not IceCream.validator(request.form):
        return redirect("/ice_creams/new")

    sprinkles = 0
    if "sprinkles" in request.form:
        sprinkles = 1

    data = {
        "flavor": request.form['flavor'],
        "cone": request.form['cone'],
        "sprinkles": sprinkles,
        "id": id
    }
    IceCream.update(data)

    return redirect("/dashboard")


# DELETE
@app.route("/ice_creams/<int:id>/delete")
def delete_ice_cream(id):
    IceCream.delete({"id": id})

    return redirect("/dashboard")
    
