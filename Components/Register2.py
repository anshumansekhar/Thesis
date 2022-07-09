import flask

app = flask.Flask(__name__)

@app.route("/register", methods=["POST", "GET"])
def date():
    if flask.request.method == "POST":
        emailInput=flask.request.form.get('email')
        passwordInput=flask.request.form.get('password')
        usernameInput=flask.request.form.get('username')
        f = open("temp.txt", "a")
        f.write("username="+usernameInput)
        f.write("\n")
        f.write("email="+emailInput)
        f.write("\n")
        f.write("password="+passwordInput)
        f.write("\n")
        f.close()
        return "User Registered"
    else:
        return """
            <body>
            <form method="POST">
                <table>
                <tr>
                <td><label>username:</label></td>
                <td><input type="text" name="username"></td>
                </tr>
                <tr>
                <td><label>email:</label></td>
                <td><input type="email" name="email"></td>
                </tr>
                <tr>
                <td><label>password:</label></td>
                <td><input type="password" name="password"></td>
                </tr>
                <tr>
                <td><label>Confirm Password:</label></td>
                <td><input type="password" name="password"></td>
                </tr>
                </table>
                <input type="submit">

            </form>
            </body>
        """