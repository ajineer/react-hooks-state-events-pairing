import React from "react";

function Header({video}){
    return(
        <>
            <h1>{video.title}</h1>
            <h3>{video.views} Views | Uploaded Oct 26, 2018</h3>
        </>
    )
}

export default Header