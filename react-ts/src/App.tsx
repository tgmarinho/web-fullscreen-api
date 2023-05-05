import React, { useRef } from 'react';
import './App.css';

function App() {
  const contentRef = useRef(null);

  const toggleFullscreen = () => {
    const content = contentRef.current;

    if (!document.fullscreenElement) {
      // Request fullscreen mode
      content.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      // Exit fullscreen mode
      document.exitFullscreen();
    }
  };

  // Optional: Add event listeners for fullscreen change and fullscreen error
  React.useEffect(() => {
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
    <div
      ref={contentRef}
      className="App"
      onClick={toggleFullscreen}
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Click anywhere to toggle fullscreen mode</p>
    </div>
  );
}

export default App;