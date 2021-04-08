from flask import Flask # from the flask library we are importing the Flask class

app = Flask(__name__) # instantiating a new Flask object in the app variable


@app.route('/') # we declare the route - this route is the index route (root route)
def index():
    return "Hello There" # the return sends the HTTP response back tot he client


@app.route('/hello')
def hello():
    return "This is the hello route"


@app.route("/dogs/<int:num_of_dogs>") # we can declare Path Variables - we send information over the route
def dogs(num_of_dogs):
    return f"I have {num_of_dogs} dogs"


@app.route("/dogs/<string:stuff>")
def other_dogs(stuff):
    return stuff


@app.route("/<description>/dogs/cats/elephants")
def more_dogs(description):
    return f"I have {description} dogs."


if __name__ == "__main__": # Ensures that this file is being run directly and not from another file
    app.run(debug = True) # Run the app in debug mode - good for development, not for production

