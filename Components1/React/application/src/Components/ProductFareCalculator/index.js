import React from "react";
const ProductFareCalculator = (props) => {
    function get(e) {
        var discount=0.10;
        var newAmmount=(props.amountPre-props.amountPre*discount)*props.numberOfItemsPre;
        console.log(props.numberOfItemsPre)
        console.log(props.amountPre)
        console.log(newAmmount);
        props.amountPost(newAmmount)
    }


    return (<div>
        <button onClick={get}>Get Total Cost</button>
    </div>);
}
export default ProductFareCalculator;
