import flask
app = flask.Flask(__name__)

@app.route("/search", methods=["POST", "GET"])
def search():
    if flask.request.method == "POST":
        return "Search Results"
    else:
        return """
        <body>
            <form id="regicomp" method="POST">
                <input type="text" placeholder=Search name="search">
                <button type="submit">Search</button>
            </form>
        </body>
      """

if __name__ == "__main__":
    app.run()