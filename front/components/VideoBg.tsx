import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/earth.mp4"
        className="w-full h-full object-cover brightness-75 contrast-110 saturate-120"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
    </div>
  );
};

export default VideoBackground;
