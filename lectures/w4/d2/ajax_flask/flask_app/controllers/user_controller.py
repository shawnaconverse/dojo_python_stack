from flask import render_template, jsonify, request, redirect


from flask_app import app
from flask_app.models.user import User


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/users')
def users():
    print("hello there")
    return jsonify(User.get_all())


@app.route('/users/create', methods=['POST'])
def create_user():
    if "username" not in request.json or len(request.json['username']) < 2:
        return jsonify({"error_message": "username format is invalid"})
    if "email" not in request.json or len(request.json['email']) < 2:
        return jsonify({"error_message": "email format is invalid"})
    
    print(request.json)
    User.create(request.json)

    return jsonify(success_message = "Added a User!")

