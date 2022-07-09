import React from "react";
const FlightClassType = (props) => {
    function onClassTypeChange(e)
    {
        props.classTypePost=e.target.value;
    }
    return (
        <div>
            <select onchange={onClassTypeChange}>
                <option value="Economy">Economy</option>
                <option value="First">First</option>
                <option value="Business">Business</option>
                <option value="Premium Economy">Premium Economy</option>
            </select>
        </div>
    );
}
export default ClassTypeAndQuota;