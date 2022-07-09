import flask
app = flask.Flask(__name__)


@app.route("/logout", methods=["POST", "GET"])
def displayFlights():
    if flask.request.method == "POST":
        # call to logut function
        return "User Logged Out"
    else:
        return """
            <form method="POST">
            <table border="1">
                <tr>
                <td><Button type="submit">Logout</Button></td>
                </tr>
            </table>
            </form>
        """


if __name__ == "__main__":
    app.run()