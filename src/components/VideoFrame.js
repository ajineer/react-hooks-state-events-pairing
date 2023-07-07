import React from "react";

function VideoFrame({video}){
    return (
        <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
        />
    )
}

export default VideoFrame