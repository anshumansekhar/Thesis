import React from "react";
const PaymentPageUI = (props) => {
    function pay()
    {
        var amount=props.farePre;
        console.log("Payment Done:"+amount)
        props.paymentStatusPost(true)
    }
return(
    
<table border="2">
            <tr>
                <td>
                    <input type="radio" name="paymentMode"/>
                    <option value="creditCard"/>
                </td>
                <td>
                    <h3>Credit Card</h3>
                    <label>Card Number:</label>
                    <input type="text"/><br></br>
                    <label>Name on Card:</label>
                    <input type="text"/><br></br>
                    <label>Expiry:</label>
                    <input type="text"/>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode"/>
                    <option value="debitCard"/>
                </td>
                <td>
                    <h3>Debit Card</h3>
                    <label>Card Number:</label>
                    <input type="text"/><br></br>
                    <label>Name on Card:</label>
                    <input type="text"/><br></br>
                    <label>Expiry:</label>
                    <input type="text"/>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="paymentMode"/>
                    <option value="cod"/>
                </td>
                <td>
                    <h3>Cash on Delivery</h3>
                </td>
            </tr>
            <tr>
                <td><button onClick={pay}>Pay</button></td>
            </tr>
</table>
        )
}
export default PaymentPageUI;