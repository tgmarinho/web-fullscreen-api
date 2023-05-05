import React, { useRef, useEffect } from 'react';
import './App.css';

function RestreamVideo() {
  const iframeRef = useRef(null);

  const toggleFullscreen = () => {
    const iframe = iframeRef.current;

    if (!document.fullscreenElement) {
      // Request fullscreen mode
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        // For iPhone/iPad
        iframe.webkitRequestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        // For iPhone/iPad
        document.webkitExitFullscreen();
      }
    }
  };

  return (
    <div className="App">
      <iframe
        ref={iframeRef}
        src="https://example.com"
        title="Example iframe"
        style={{ width: '100%', height: '300px', border: 'none' }}
      ></iframe>
      <button onClick={toggleFullscreen}>Toggle Fullscreen</button>
    </div>
  );
}

export default RestreamVideo;
