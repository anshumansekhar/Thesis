import flask_session
import flask
import login
import DatePicker
import AgeDisplay

app = flask.Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
app.config['SECRET_KEY'] = 'New App'    

age=0
isLoggedIn=False

app.register_blueprint(login.loginB)
app.register_blueprint(AgeDisplay.ageDisplayB)
app.register_blueprint(DatePicker.DatePickerB)

flask_session.Session(app)



@app.route("/")
def home():
    print(age)
    print(isLoggedIn)
    print(type(isLoggedIn))
    if isLoggedIn is None or isLoggedIn==False:
        return flask.redirect(flask.url_for('login.login'))
    if not age == 0:
        return flask.redirect(flask.url_for('ageDisplay.age',age=age))
    if isLoggedIn==True:
        return flask.redirect(flask.url_for('DatePicker.date'))
    

    # return flask.redirect(flask.url_for('ageDisplay.age',age=90))

@app.route("/age/<agev>")
def updateAge(agev):
    global age
    age=int(agev)
    return flask.redirect(flask.url_for('home'))
@app.route("/login/<loggedInV>")
def updateLogin(loggedInV):
    global isLoggedIn
    isLoggedIn=bool(loggedInV)
    return flask.redirect(flask.url_for('home'))


if __name__=="__main__":
    app.run(debug=True)
    
    





