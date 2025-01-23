import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import { motion, useScroll } from 'framer-motion';

const VideoPlayer = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="video-player-container">
      {/* Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Video Player */}
      <ReactPlayer 
        url={'c1.mp4'} 
        className="react-player"
        playing
        controls
        width="100%" 
        height="100%" 
      />
      
    
    </div>
  );
};

export default VideoPlayer;
