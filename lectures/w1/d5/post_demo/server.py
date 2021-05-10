from flask import Flask, render_template, request, redirect, session


app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/burgers/create", methods = ['POST'])
def create_burger():
    print(request.form)
    # print(request.form['buns'])
    # print(request.form['num_of_patties'])
    # print(request.form['cheese'])
    if request.form['which_form'] == 'burger':
        print("IN THE BURGER IF STATEMENT")
        session['buns'] = request.form['buns']
        session['patties'] = request.form['num_of_patties']
        session['cheese'] = request.form['cheese']
    if request.form['which_form'] == 'chicken':
        print('IN THE CHICKEN PRINT STATEMENT')
        session["style"] = request.form['style']

    return redirect("/burgers") # making a new GET request on behalf of the user


@app.route("/burgers")
def display_burgers():
    # print(request.form['buns'])
    print(session['buns'])
    return render_template(
        "show.html"
    )


if __name__ == "__main__":
    app.run(debug = True)

