from flask_app import app
from flask_app.controllers import dog_controller, collar_controller, toy_controller


if __name__ == "__main__":
    app.run(debug = True)
