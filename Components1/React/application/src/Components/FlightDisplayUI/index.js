import React from "react";
const FlightDisplayUI = (props) => {
    var flight;
    function onClickSelect(e)
    {
        props.selectedFlightPost(flight);
        props.amountPost(flight.price);
    }
    function onFlightSelect(e)
    {
        console.log(e.airlineName);
        flight=e;
    }
    return (
        <div>
        <table border="1">
            <thead>
                <th>
                    Airline
                </th>
                <th>
                    Code
                </th>
                <th>
                    Departure
                </th>
                <th>
                    Arrival
                </th>
                <th>
                    No. of Stops
                </th>
                <th>
                    Duration
                </th>
                <th>
                    Price
                </th>
            </thead>
            <tbody>
                {
                    props.searchedFlightListPre.map((e) => (
                        <tr key={e.airlineCode}>
                            <td><input type="radio" name="flightRadio" value={e} onInput={onFlightSelect(e)} /></td>
                            <td>{e.airlineName}</td>
                            <td>{e.airlineCode}</td>
                            <td>{e.airlineDepar}</td>
                            <td>{e.airlineArr}</td>
                            <td>{e.numStops}</td>
                            <td>{e.duration}</td>
                            <td>{e.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br></br>
        <button onClick={onClickSelect}>Select Flight</button>
        </div>
    );
};

export default FlightDisplayUI;