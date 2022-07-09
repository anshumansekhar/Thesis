import flask
app = flask.Flask(__name__)

@app.route("/profile", methods=["POST", "GET"])
def getProfile():
    if flask.request.method == "POST":
        return ""
    else:
        name="Ashuman"
        email="anshuma@rfg.com"
        address="Odisha"
        phoneNumber="456789"
        return """
        <table border="2">
            <tr>
                <td>Name:</td>
                <td>"""+name+"""</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>"""+email+"""</td>
            </tr>
            <tr>
                <td>Address:</td>
                <td>"""+address+"""</td>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <td>"""+phoneNumber+"""</td>
            </tr>
        </table>
        """