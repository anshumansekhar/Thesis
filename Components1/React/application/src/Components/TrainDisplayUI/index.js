import React from "react";
const TrainDisplayUI = (props) => {

    var train;
    function onClickSelect(e)
    {
        props.selectedTrainPost(train);
        props.amountPost(train.price);
    }
    function onTrainSelect(e)
    {
        console.log(e.TrainName);
        train=e;
    }
    return (
        <div>
        <table border="1">
            <thead>
                <th>Select </th>
                <th>
                    Train Number
                </th>
                <th>
                    Train Name
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
                        props.searchedTrainListPre.map((e) => (
                            <tr key={e.TrainNumber}>
                                <td><input type="radio" name="trainRadio" value={e} onInput={onTrainSelect(e)} /></td>
                                <td>{e.TrainNumber}</td>
                                <td>{e.TrainName}</td>
                                <td>{e.duration}</td>
                                <td>{e.price}</td>
                            </tr>
                        ))
                        
                    }
                
            </tbody>
        </table>
        <br></br>
        <button onClick={onClickSelect}>Select Train</button>
        </div>
    );
};
export default TrainDisplayUI;