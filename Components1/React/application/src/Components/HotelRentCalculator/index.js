import React from "react";
const HotelRentCalculator = (props) => {
    function get(e) {
        var numberOfDays=props.toDate-props.fromDate;
        props.amountPost(numberOfDays*props.rentPerNightPre*props.numberOfGuestsPre)
    }


    return (<div>
        <button onClick={get}>Get Rent</button>
    </div>);
}
export default HotelRentCalculator;
