import React, { useState } from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ title, thumbnail, videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="video-card">
      <div className="card-media">
        {showVideo ? (
          <video src={videoUrl} controls autoPlay className="video-player" />
        ) : (
          <div className="thumbnail-container" onClick={() => setShowVideo(true)}>
            <img src={thumbnail} alt={title} className="thumbnail" />
            <div className="play-icon">▶</div>
          </div>
        )}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
