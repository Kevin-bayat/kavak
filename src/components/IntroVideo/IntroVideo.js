import React from "react";
import "./IntroVideo.scss";

const IntroVideo = ({ videoSrc }) => {
  // const [playVideo, setPlayVideo] = React.useState(true);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={videoSrc}
        type="video/mp4"
        loop
        controls={false}
        autoPlay
      />
      <div className="app__video-overlay flex__center" />
    </div>
  );
};

export default IntroVideo;
