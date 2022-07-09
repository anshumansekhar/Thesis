import React from "react";
const TrainBookingConfirmed = (props) => {
return(
    <p>
        Train Booking Confirmed for {props.passengerPre.Name}<br></br>
        Travel Date {props.DOJPre}<br></br>
        Train Name {props.selectedTrain.TrainName}<br></br>
        Duration {props.selectedTrain.duration}<br></br>
        Fare {props.farePre}<br></br>
        
        Seat number will be notified 3 hrs before the scheduled departure.

    </p>
);
}
export default TrainBookingConfirmed;