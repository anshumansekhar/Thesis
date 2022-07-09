import flask


app = flask.Flask(__name__)

@app.route("/selectRoom", methods=["POST", "GET"])
def selectRoom():
    if flask.request.method == "POST":
        return "Room Selected is {} and guests {}".format(flask.request.form['roomTypesList'],flask.request.form['noOfGuests'])
    else:
        return """
        <form method="POST">
        <select id="roomTypesList" name="roomTypesList">
            <option value="empty">Select Room Type</option>
            <option value="ac_deluxe">AC Deluxe</option>
            <option value="non_ac_deluxe">Non AC Deluxe</option>
            <option value="Dorm">Dormitory</option>
            <option value="suite">Executive Suite</option>
            <option value="presidentSuite">Presidential Suite</option>
            <option value="cabana">Cabana</option>
            <option value="villa">Villa</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
        </select>
        <select id="noOfGuests" name="noOfGuests">
            <option value="empty">Select number of Guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <input type="submit"></input>
</form>
"""