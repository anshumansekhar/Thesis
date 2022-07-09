import flask
import datetime as dt


DatePickerB = flask.Blueprint('DatePicker', __name__)

def age(birthday):
    birthdate=dt.datetime.strptime(birthday,'%Y-%m-%d')
    today = dt.date.today()
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    return age

@DatePickerB.route("/date", methods=["POST", "GET"])
def date():
    if flask.request.method == "POST":
        dateInput=flask.request.form.get('date')
        ageV=age(dateInput)
        return flask.redirect(flask.url_for('updateAge',agev=ageV))

    else:
        return """
            <body>
            <form method="POST">
                <label>Date of Birth:</label>
                <input type="date" name="date">
                <input type="submit">
            </form>
            </body>
        """