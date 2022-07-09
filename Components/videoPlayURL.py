import flask
app = flask.Flask(__name__)

@app.route("/playVideo", methods=["POST", "GET"])
def playVideo():
    url=flask.request.args.get('videoUrl')
    return "<video width=\"320\" height=\"240\" controls src="+url+"></video>"

if __name__ == "__main__":
    app.run()