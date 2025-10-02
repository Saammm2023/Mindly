const VideoSelector = ({ videos, currentId, onSelect }) => {
    return (
        <div className="video-selector">
            {videos.map((vid) => (
                <div
                    key={vid.id} //key=videos.id (the id inside the object which we created in data.js)
                    className={`video-thumb ${vid.id === currentId ? "active" : ""}`}//backticks (``) is for concatenation
                    //we are using a dynamic class name so that the current vdo selected can be styled in css accordingly
                    onClick={() => onSelect(vid.id)}
                >
                    {/* title and thumbnail are again coming from the video data object */}
                    <img src={vid.thumbnail} alt={vid.title} />
                    {/* the alt attribute is for the sake of screen reader (visually impaired ppl)*/}
                    {/* <p>{vid.title}</p> */}
                </div>
            ))}
        </div>
    );
};

export default VideoSelector;
