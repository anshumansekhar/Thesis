import React from "react";
const VideoList = (props) => {
    var videoId;
    var videosList=[{
        "VideoId":"LwnApD9YXNY",
        "VideoTitle":"RBI Banning Buy now pay later",
        "ChannelName":"Think School",
        "Views":"274,973"
    },
    {
        "VideoId":"oIRfMtBxOhY",
        "VideoTitle":"Putin declares Victory",
        "ChannelName":"World Affairs",
        "Views":"431,272"
    },
    {
        "VideoId":"HKj_3fDRgIk",
        "VideoTitle":"Upi Success",
        "ChannelName":"Asianometry",
        "Views":"39,188"
    }]
    function onClickSelect(e)
    {
        props.videoIdPost(videoId);
    }
    function onVideoSelect(e)
    {
        videoId=e.target.value;
    }
    return (
        <div>
        <table border="1">
            <thead>
                <th>Select </th>
                <th>
                    Video Id
                </th>
                <th>
                    Video Title
                </th>
                <th>
                    Channel Name
                </th>
                <th>
                    Views
                </th>
            </thead>
            <tbody>
                
                    {
                        videosList.map((e) => (
                            <tr key={e.VideoId}>
                                <td><input type="radio"  name="videoRadio" id="videoRadio" value={e.VideoId} onChange={onVideoSelect}  /></td>
                                <td>{e.VideoId}</td>
                                <td>{e.VideoTitle}</td>
                                <td>{e.ChannelName}</td>
                                <td>{e.Views}</td>
                            </tr>
                        ))
                        
                    }
                
            </tbody>
        </table>
        <br></br>
        <button onClick={onClickSelect}>Watch Video</button>
        </div>
    );
};
export default VideoList;