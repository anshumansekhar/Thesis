import flask

app = flask.Flask(__name__)

@app.route("/dateofbirth", methods=["POST", "GET"])
def date():
    if flask.request.method == "POST":
        dateInput=flask.request.form.get('date')
        f = open("temp.txt", "a")
        f.write("dateofbirth="+dateInput)
        f.write("\n")
        f.close()
        return "Date Sent"
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