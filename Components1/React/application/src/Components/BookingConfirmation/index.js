import React from "react";
const BookingConfirmation = (props) => {
    var confirm;
    function confirm(e) {
        confirm=e.target.value;
    }
    function click(){
        props.confirmPost(confirm)
    }
    return (
        <div>Confirm booking?
            <select onChange={confirm}>
                <option value={yes}>Yes</option>
                <option value={no}>No</option>
            </select>
            <button onClick={click}></button>
        </div>
    );
}
export default BookingConfirmation;