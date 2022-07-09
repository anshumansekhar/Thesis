import React from "react";
const FlightBookingConfirmed = (props) => {
    return(
        <div>
            Hii,<br></br>
            Booking confirmed on flight {props.selectedFlightPre.airlineName} for {props.dateJorneyPre}
            <br></br>
            Your departure is from {props.fromCity} and arrival is at {props.toCity}
        </div>
    )
}
export default FlightBookingConfirmed;