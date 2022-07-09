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
        <table border=2>
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
                    <option value="netbanking"/>
                </td>
                <td>
                    <h3>Net Banking</h3>
                    <select>
                        <option>Choose an Option</option>
                        <option value="axisBank">Axis Bank</option>
                        <option value="hdfcBank">HDFC Bank</option>
                        <option value="iciciBank">ICICI Bank</option>
                        <option value="SBI">State Bank of India</option>
                        <option value="kotakBank">Kotak Bank</option>
                        <option value="idbiBank">IDBI Bank</option>
                        <option value="bob">Bank of Baroda</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode">
                    <option value="upi"/>
                </td>
                <td>
                    <h3>UPI</h3>
                    <label>UPI ID:</label>
                    <br>
                    <input type="text"><button>Verify</button>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode">
                    <option value="EMI"/>
                </td>
                <td>
                    <h3>EMI</h3>
                    <select>
                        <option>Choose an Option</option>
                        <option value="axisBank">Axis Bank</option>
                        <option value="hdfcBank">HDFC Bank</option>
                        <option value="iciciBank">ICICI Bank</option>
                        <option value="SBI">State Bank of India</option>
                        <option value="bajajFin">Bajaj Finserv</option>
                        <option value="mahindraFin">Mahindra Finance</option>
                        
                    </select>
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