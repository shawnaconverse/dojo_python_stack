from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe."


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process", methods = ["POST"])
def process():
    print(request.form)
    print(request.form['name'])
    print(request.form['age'])
    print(request.form['hair_color'])
    session['name'] = request.form['name']
    session['age'] = request.form['age']
    session['hair_color'] = request.form['hair_color']

    return redirect("/success")


@app.route("/success")
def success():
    print(request.form)
    return render_template(
        "success.html",
        name = session['name'],
        age = session['age'],
        hair_color = session['hair_color']
    )


@app.route("/logout")
def logout():
    # log the person out
    return redirect("/")

if __name__ == "__main__":
    app.run(debug = True)

