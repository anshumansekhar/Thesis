import flask
loginB = flask.Blueprint('login', __name__)


@loginB.route("/login", methods=["POST", "GET"])
def login():
    if flask.request.method == "POST":
        return flask.redirect(flask.url_for('updateLogin',loggedInV=True))
    else:
        return """
        <body>
            <form method="POST">
            <table border="1">
            <thead>
                    <tr>
                        <th colspan="2">Login</th>
                    </tr>
            </thead>
            <tbody>
            <tr>
                <td><label for="namefield">Name</label></td>
                <td><input type="text" name="namefield" placeholder="Enter your name" required/></td>
            </tr>
            <tr>
                <td><label for="pwdfield">Password</label></td>
                <td><input type="password" name="pwdfield" placeholder="Enter password" required/></td>
            </tr>
            <tr>
                <td><button type="submit" name="submit">Submit</button></td>
                <td><a href="#">Forgot Password</a></td>
            </tr>
            </tbody>
            </table>
            </form>
        </body>
      """
