import flask

app = flask.Flask(__name__)

@app.route("/age", methods=["POST", "GET"])
def age():
    if flask.request.method == "POST":
        return "Date Printed"
    else:
        return """
            The age is:{}
        """.format(flask.request.args.get('age'))