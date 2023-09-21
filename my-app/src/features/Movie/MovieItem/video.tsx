import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="video-player ">
      <ReactPlayer
        url={videoUrl}
        controls // Optional: to display video controls
        width="100%" // Set the player's width
        
        height="600px" // Set the player's height
      />
    </div>
  );
};

export default VideoPlayer;
