import React from "react";
const PassengerDetailsUI = (props) => {
    var name;
    var age;
    var gender;
    var PhoneNumber;
    function onPassengerName(e)
    {
        name=e.target.value;
    }
    function onAge(e)
    {
        age=e.target.value;
    }
    function onGender(e)
    {
        gender=e.target.value;
    }
    function onPhoneNumber(e)
    {
        PhoneNumber=e.target.value;
    }

    function addPassenger(e){

        props.passengerPost={"Name":name,"Age":age,"Gender":gender,"PhoneNumber":PhoneNumber}
    }

    return (<div>
        <input placeholder="Enter Passenger Name" onInput={onPassengerName}/>
        <input  type="number" placeholder="Age" onInput={onAge}/>
        <select onChange={onGender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <input  type="tel" placeholder="Phone Number" onInput={onPhoneNumber}/>
        <button onClick={addPassenger}>Proceed</button>
    </div>)
}
export default PassengerDetailsUI