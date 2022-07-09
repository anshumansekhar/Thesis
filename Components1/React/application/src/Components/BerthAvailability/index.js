import React from "react";
const BerthAvailability = (props) => {
    function get(e) {
        var trainNumber=props.trainNumberPre;
        var doj=props.DOJPre;
        var fromCity=props.fromCity;
        var toCity=props.toCity;
        props.berthAvailablePost(true);
    }

    return (<div>
        <button onClick={get}>Get Total Fare</button>
    </div>);
}
export default BerthAvailability;
