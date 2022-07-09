import flask
app = flask.Flask(__name__)

@app.route("/playVideo", methods=["POST", "GET"])
def playVideo():
    url="https://www.youtube.com/embed/"+flask.request.args.get('videoID')
    return "<iframe width=\"320\" height=\"240\" src=\""+url+"\"></iframe>"

if __name__ == "__main__":
    app.run()