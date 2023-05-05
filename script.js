function toggleFullscreen() {
  const content = document.getElementById("content");

  if (!document.fullscreenElement) {
      // Request fullscreen mode
      content.requestFullscreen().catch(err => {
          alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
  } else {
      // Exit fullscreen mode
      document.exitFullscreen();
  }
}

// Optional: Add event listeners for fullscreen change and fullscreen error
document.addEventListener("fullscreenchange", (event) => {
  console.log("Fullscreen status changed:", !!document.fullscreenElement);
});

document.addEventListener("fullscreenerror", (event) => {
  console.error("Fullscreen error:", event);
});
