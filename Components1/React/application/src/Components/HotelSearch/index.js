import React from "react";
const GetFilghts = (props) => {
    function get(e) { 
    var city = props.cityPre
    var state = props.statePre
    // get flights from api
    props.searchedHotelListPost(
        [
            {
                "hotelName": "ITC Grand",
                "location": "G B Road",
                "rentPerNight": 3000
            }
        ]

    );
    }


return (<div>
    <button onClick={get}>Get Hotels</button>
</div>);
}
export default GetFilghts;
