import React from "react";
const PaymentPageUI = (props) => {
    function pay() {
        var amount = props.amountPre;
        console.log("Payment Done:" + amount)
        props.paymentStatusPost(true)
    }
    return (
        <div>
            The amount to pay is {props.amountPre}<br></br>
        <table border="2">
            <tr>
                <td>
                    <input type="radio" name="paymentMode" />
                    <option value="creditCard" />
                </td>
                <td>
                    <h3>Credit Card</h3>
                    <label>Card Number:</label>
                    <input type="text" /><br></br>
                    <label>Name on Card:</label>
                    <input type="text" /><br></br>
                    <label>Expiry:</label>
                    <input type="text" />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode" />
                    <option value="debitCard" />
                </td>
                <td>
                    <h3>Debit Card</h3>
                    <label>Card Number:</label>
                    <input type="text" /><br></br>
                    <label>Name on Card:</label>
                    <input type="text" /><br></br>
                    <label>Expiry:</label>
                    <input type="text" />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode" />
                    <option value="netbanking" />
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
                    <input type="radio" name="paymentMode" />
                    <option value="upi" />
                </td>
                <td>
                    <h3>UPI</h3>
                    <label>UPI ID:</label>
                    <br></br>
                    <input type="text" /><button>Verify</button>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode" />
                    <option value="cash" />
                </td>
                <td>
                    Cash on Delivery
                </td>
            </tr>

            <tr>
                <td><button onClick={pay}>Pay</button></td>
            </tr>
        </table>
        </div>
    )
}
export default PaymentPageUI;