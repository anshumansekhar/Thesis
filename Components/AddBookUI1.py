import flask
AddBookUI1 = flask.Blueprint('AddBookUI1', __name__)



@AddBookUI1.route("/addBook/<pre>/<post>", methods=["POST", "GET"])
def AddBookUI1(pre,post):
    if flask.request.method == "POST":
        return flask.redirect(flask.url_for('home',pre=pre,post=post));
    else:
        return """
        <html>
    <head>
        <title></title>
    </head>
    <body>
        <form method="POST">
            <table>
                <tr>
                    <td>
                        <label>Book Name:</label>
                        </td>
                        <td>
                    <input type="text" name="BookName">
                </td>
                </tr>
                <tr>
                    <td>
                        <label>Author Name:</label>
                    </td>
                    <td>
                <input type="text" name="AuthorName">
            </td>
            </tr>
            <tr>
                <td>
                    <label>Year:</label>
                </td>
                <td>
                <input type="text" name="year">
            </td>
            </tr>
            <tr>
            <td colspan=2>
                <input type="submit">
            </td>
            </tr>
            </table>
        </form>
    </body>
</html>
      """
