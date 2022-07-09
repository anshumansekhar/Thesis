import flask

class Airline:
    name=""
    code=""
    departure=""
    arrival=""
    numOfStop=""
    duration=""
    price=""

    def __init__(self, name,code,departure,arrival,numOfStop,duration,price):
        self.name = name
        self.code=code
        self.departure=departure
        self.arrival=arrival
        self.numOfStop=numOfStop
        self.duration=duration
        self.price=price

app = flask.Flask(__name__)


@app.route("/flights", methods=["POST", "GET"])
def displayFlights():
    if flask.request.method == "POST":
        return "Flights Selected"
    else:
        # get airlines from json
        airlines=[Airline('Jet Airways','JH45','PRYJ','BEL','2','3hrs','5000')]

    return flask.render_template('FlightDisplayUI.html', airlines=airlines)


if __name__ == "__main__":
    app.run()