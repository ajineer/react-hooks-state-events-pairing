import React, {useState} from "react";

function Votes({video}){
    
    const [tUp,setTUp] = useState(video.upvotes)
    const [tDown,setTDown] = useState(video.downvotes)

    function upVote(){
        let increment = tUp + 1
        setTUp(increment)
    }

    function downVote(){
        let decrement = tDown + 1
        setTDown(decrement)
    }

    return(
        <>
            <button onClick={upVote}>{tUp} 👍</button>
            <button onClick={downVote}>{tDown} 👎</button>
        </>
    )
}

export default Votes