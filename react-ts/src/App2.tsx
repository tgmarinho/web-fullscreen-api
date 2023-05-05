import React, { useRef, useEffect } from 'react';
import './App.css';

function App2() {
  const videoRef = useRef(null);

  const toggleFullscreen = () => {
    const video = videoRef.current;

    if (!document.fullscreenElement) {
      // Request fullscreen mode
      video.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      // Exit fullscreen mode
      document.exitFullscreen();
    }
  };

  // Optional: Add event listeners for fullscreen change and fullscreen error
  useEffect(() => {
    const handleFullscreenChange = () => {
      console.log('Fullscreen status changed:', !!document.fullscreenElement);
    };

    const handleFullscreenError = (event) => {
      console.error('Fullscreen error:', event);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('fullscreenerror', handleFullscreenError);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('fullscreenerror', handleFullscreenError);
    };
  }, []);

  return (
    <div className="App">
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        onClick={toggleFullscreen}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default App2;