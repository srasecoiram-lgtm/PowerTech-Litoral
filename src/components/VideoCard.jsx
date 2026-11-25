import { useState } from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ title, thumbnail, videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);
  const abrir = () => setShowVideo(true);

  return (
    <div className="video-card">
      <div className="card-media">
        {showVideo ? (
          <video src={videoUrl} controls autoPlay playsInline preload="metadata" className="video-player" />
        ) : (
          <button
            type="button"
            className="thumbnail-container"
            onClick={abrir}
            aria-label={`Assistir vídeo: ${title}`}
          >
            <img src={thumbnail} alt={title} className="thumbnail" loading="lazy" decoding="async" />
            <span className="play-icon" aria-hidden="true">▶</span>
          </button>
        )}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
