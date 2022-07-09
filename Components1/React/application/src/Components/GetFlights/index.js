import React from "react";
const GetFilghts = (props) => {
    function get(e) { 
    var fromCity = props.fromCityPre
    var toCity = props.toCityPre
    var dateJorney = props.DateOfJorneyPre
    // get flights from api
    props.searchedflightListPost(
        [
            {
                "airlineName": "Air Asia",
                "airlineCode": "AA213",
                "airlineDepar": "12:00",
                "airlineArr": "14:00",
                "numStops": 0,
                "duration": "2hrs",
                "price": 3000
            }
        ]

    );
    }


return (<div>
    <button onClick={get}>Get Flights</button>
</div>);
}
export default GetFilghts;
