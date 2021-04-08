from flask import Flask, render_template # from the flask library we are importing the Flask class

app = Flask(__name__) # instantiating a new Flask object in the app variable


@app.route('/') # we declare the route - this route is the index route (root route)
def index():
    # return "Hello There" # the return sends the HTTP response back tot he client
    return render_template("index.html", dog_name = "Vicky", color_on_template = "blue")


@app.route("/dogs/<name>")
def display_dog(name):
    return render_template("index.html", dog_name = name, color_on_template = "blue")


@app.route("/dogs/<name>/<color>")
def in_color(name, color):
    return render_template("index.html", dog_name = name, color_on_template = color)


@app.route("/<int:num_of_biscuits>")
def display_number(num_of_biscuits):
    return render_template("biscuits.html", times = num_of_biscuits)


@app.route("/lists")
def render_lists():
    instructor_info = [
        {"name": "Shawn Converse", "age": 27},
        {"name": "Tyler Thibault", "age": 27},
        {"name": "Brendan Stanton", "age": 27},
        {"name": "Endward Im", "age": 27}
    ]

    return render_template("index.html", color_on_template = "blue", instructors = instructor_info)



# @app.route('/hello')
# def hello():
#     return "This is the hello route"


# @app.route("/dogs/<int:num_of_dogs>") # we can declare Path Variables - we send information over the route
# def dogs(num_of_dogs):
#     return f"I have {num_of_dogs} dogs"


# @app.route("/dogs/<string:stuff>")
# def other_dogs(stuff):
#     return stuff


# @app.route("/<description>/dogs/cats/elephants")
# def more_dogs(description):
#     return f"I have {description} dogs."


if __name__ == "__main__": # Ensures that this file is being run directly and not from another file
    app.run(debug = True) # Run the app in debug mode - good for development, not for production

