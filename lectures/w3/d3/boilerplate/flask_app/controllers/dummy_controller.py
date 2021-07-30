from flask import render_template, redirect, request, session, flash

from flask_app import app
from flask_app.models.user import User


@app.route("/dashboard")
def display_users():
    if "uuid" not in session:
        return redirect('/')

    return render_template("dashboard.html")



