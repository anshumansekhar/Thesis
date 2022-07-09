import flask

app = flask.Flask(__name__)


@app.route("/addBook1", methods=["POST", "GET"])
def login1():
    if flask.request.method == "POST":
        return "Book Added"
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
                    <label>Topic Name:</label>
                </td>
                <td>
                <input type="text" name="TopicName">
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


if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000)
