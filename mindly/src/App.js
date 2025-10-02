import React, { useState, useMemo } from "react";
import VideoBackground from "./soloStudy/vdoBg";
import VideoSelector from "./soloStudy/vdoSelector";
import Timer from "./soloStudy/timer";
import { videos } from "./soloStudy/vdoData";
//videos is the name of the object in data.js
//import "./App.css";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].id);
  //currentVideo is a variable storing the id from the videos object from data.js

  const embedUrl = useMemo(() => {
    return `https://www.youtube.com/embed/${currentVideo}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playlist=${currentVideo}`;
  }, [currentVideo]);

  return (
    <div className="App">
      <VideoBackground embedUrl={embedUrl} />
      <div className="overlay">
        <Timer />
        <VideoSelector
          videos={videos}
          currentId={currentVideo}
          onSelect={setCurrentVideo}
        />
      </div>
    </div>
  );
}

export default App;
