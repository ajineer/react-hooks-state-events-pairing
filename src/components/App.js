import VideoFrame from "./VideoFrame.js";
import video from "../data/video.js";
import Header from "./Header.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoFrame video={video}/>
      <Header video={video}/>
      <Votes video={video}/>
      <br></br>
      <br></br>
      <Comments video={video}/>
    </div>
  );
}

export default App;
