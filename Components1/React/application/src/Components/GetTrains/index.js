import React from "react";
const GetTrains = (props) => {
    function get(e) {
        var fromCity = props.fromCityPre
        var toCity = props.toCityPre
        var dateJorney = props.DateOfJorneyPre
        var classType=props.classTypePre
        // get flights from api
        props.searchedTrainListPost(
            [
                {
                    "TrainNumber": "18003",
                    "TrainName": "HWH-KRPU Samleswari Express",
                    "duration": "2hrs",
                    "price": 3000
                }
            ]

        );
    }


    return (<div>
        <button onClick={get}>Get Trains</button>
    </div>);
}
export default GetTrains;
