import React from "react";

const Background = ({ videoSource }) => {
  return (
    <div>
      <video
        className="absolute w-full h-full object-cover z-[-2]"
        autoPlay
        loop
        muted
        preload="none"
      >
        <source src={videoSource} type="video/mp4" />
        <source src={videoSource} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full bg-black z-[-1] opacity-50"></div>
    </div>
  );
};

export default Background;
