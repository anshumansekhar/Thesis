import React from "react";
const YoutubeVideoPlay = (props) => {
    var url="https://www.youtube.com/embed/";
    url=url.concat(props.videoIdPre);
return(
    <iframe width="600" height="500" src={url}></iframe>
)
}
export default YoutubeVideoPlay;