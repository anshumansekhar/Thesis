import React from "react";
const HotelBookingConfirmed = (props) => {
return(
    <p>
        Hotel Booking Confirmed for {props.username}<br></br>
        Booking Date {props.date}<br></br>
        Hotel Name {props.hotelname}<br></br>
        Number of Guests {props.numberOfGuests}<br></br>
        Number of Days {props.numberOfDays}<br></br>
    </p>
);
}
export default HotelBookingConfirmed;