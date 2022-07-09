import React from "react";
const HotelListUI = (props) => {
    var hotel;
    function onClickSelect(e)
    {
        props.selectedHotelPost(hotel);
        props.amountPost(hotel.rentPerNight);
    }
    function onHotelSelect(e)
    {
        console.log(e.hotelName);
        hotel=e;
    }
    return (
        <div>
        <table border="1">
            <thead>
                <th>
                    Hotel Name
                </th>
                <th>
                    Location
                </th>
                <th>
                    Rent per night
                </th>
            </thead>
            <tbody>
                {
                    props.searchedHotelListPre.map((e) => (
                        <tr key={e.hotelName}>
                            <td><input type="radio" name="flightRadio" value={e} onInput={onHotelSelect(e)} /></td>
                            <td>{e.hotelName}</td>
                            <td>{e.location}</td>
                            <td>{e.rentPerNight}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br></br>
        <button onClick={onClickSelect}>Select Hotel</button>
        </div>
    );
};

export default HotelListUI;