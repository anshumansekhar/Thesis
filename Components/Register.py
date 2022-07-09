import flask

app = flask.Flask(__name__)

@app.route("/register", methods=["POST", "GET"])
def date():
    if flask.request.method == "POST":
        emailInput=flask.request.form.get('email')
        passwordInput=flask.request.form.get('password')
        f = open("temp.txt", "a")
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
                <label>email:</label>
                <input type="email" name="email"><br>
                <label>password:</label>
                <input type="password" name="password"><br>
                <input type="submit">
            </form>
            </body>
        """