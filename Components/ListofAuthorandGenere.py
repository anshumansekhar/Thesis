import flask

app = flask.Flask(__name__)

@app.route("/bookType", methods=["POST", "GET"])
def selectBookType():
    if flask.request.method == "POST":
        return "Selected  genre {} and Author {} ".format(flask.request.form['genreDropdown'],flask.request.form['authorDropdown'])
    else:
        #get author and genres from JSON
        genres=["Fiction"]
        genre_options=""
        for genre in genres:
            genre_options+="<option value="+genre+">"+genre+"</option>"
        authors=["JK Rowling"]
        author_options=""
        for author in authors:
            author_options+="<option value="+author+">"+author+"</option>"

        return """
            <form method="POST">
                    <select name="genreDropdown">
                        <option value=''>Select a genre</option>
                        """+genre_options+"""
                    </select>
                    <select name="authorDropdown">
                        <option value=''>Select a Author</option>
                    """+author_options+"""
                    </select>
                    <input type="submit"></input>
            </form>
        """