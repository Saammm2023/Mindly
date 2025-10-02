const VideoBackground = ({ embedUrl }) => {
    return (
        <div className="video-background">
            <iframe
                className="embedded-frame"
                src={embedUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title="Background Video"
            ></iframe>
        </div>
    );
};

export default VideoBackground;