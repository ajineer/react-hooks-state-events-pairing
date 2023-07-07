import React, {useState} from "react";

function Comments({video}){

    const [isComment, setIsComment] = useState(true)

    function handleClick(){
        let display = !isComment
        setIsComment(display)
    }
    
    return(
        <>
            <button onClick={handleClick}>{isComment ? "Hide Comments" : "Show Comments"}</button>
            <h2>{video.comments.length} Comments</h2>
            {video.comments.map(comment =>{
                       return <div key={comment.id} className={isComment?"shown":"hidden"}>
                            <h3>{comment.user}</h3>
                            <h4>{comment.comment}</h4>
                       </div>
                }
            )}
        </>
    )
}

export default Comments