import flask

ageDisplayB = flask.Blueprint('ageDisplay',__name__)


@ageDisplayB.route("/ageDisplay/<age>", methods=["POST", "GET"])
def age(age):
    if flask.request.method == "POST":
        return "Age Displayed"
    else:
        return """
            The age is:{}
        """.format(age)