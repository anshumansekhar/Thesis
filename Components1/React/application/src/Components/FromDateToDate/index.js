import React from 'react'
const FromDateToDate = (props) => {
    var fromDate;
    var toDate;
    function onFromDateInput(e)
    {
        fromDate=e.target.value;
        props.fromDatePost(fromDate);
    }
    function onToDateInput(e)
    {
        toDate=e.target.value;
        props.toDatePost(toDate);
    }
    return (
        <div>
            <input type="date" name="fromDate" onInput={onFromDateInput} />
            <input type="date" name="toDate" onInput={onToDateInput} />
        </div >
    );
}

export default FromDateToDate;