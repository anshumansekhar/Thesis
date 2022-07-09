import React from "react";
const GSTCalculator = (props) => {
    function get(e) {
        props.amountPost(props.amountPre*0.18+props.amountPre)
    }


    return (<div>
        <button onClick={get}>Get Total Amount with GST</button>
    </div>);
}
export default GSTCalculator;
