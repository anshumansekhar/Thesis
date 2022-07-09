import flask


app = flask.Flask(__name__)

@app.route("/payment", methods=["POST", "GET"])
def payment():
    if flask.request.method == "POST":
        return "Payment Done"
    else:
        return """
        <form method="post">
        <h3>Select a Payment Method</h3>
        <table>
            <tr>
                <td>
                    <input type="radio" name="paymentMode">
                    <option value="creditCard"/>
                </td>
                <td>
                    <h3>Credit Card</h3>
                    <label>Card Number:</label>
                    <input type="text"><br>
                    <label>Name on Card:</label>
                    <input type="text"><br>
                    <label>Expiry:</label>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode">
                    <option value="debitCard"/>
                </td>
                <td>
                    <h3>Debit Card</h3>
                    <label>Card Number:</label>
                    <input type="text"><br>
                    <label>Name on Card:</label>
                    <input type="text"><br>
                    <label>Expiry:</label>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode">
                    <option value="cod"/>
                </td>
                <td>
                    <h3>Cash on Delivery</h3>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <input type="submit"></input>
                </td>
            </tr>
        </table>
        </form>
        """