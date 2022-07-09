import React from "react";
const PaymentFailed = (props) => {
return(
    <p>
        Payment Failed for {props.fare} amount.<br></br>
        Please Retry
    </p>
);
}
export default PaymentFailed;