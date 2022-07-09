import React from 'react'
const DateOfJourney = (props) => {
    var date
    function onDateInput(e)
    {
        date=e.target.value;
        props.dojPost(date);
    }
    return (
        <div>
            <input type="date" name="date" onInput={onDateInput} />
        </div >
    );
}

export default DateOfJourney;