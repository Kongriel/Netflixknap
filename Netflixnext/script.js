// Variable to track whether the mouse is currently moving over the video container
let mouseMovingOverContainer = false;

// Function to handle mousemove event over the video container
function handleMouseMoveOverContainer() {
  // Set mouseMovingOverContainer to true when mouse moves over the container
  mouseMovingOverContainer = true;
  // Set animation speed to be fast when mouse moves over the container
  document.getElementById("nextEpisodeBtn").style.animationDuration = "0.1s";
}

// Function to handle mouseleave event over the video container
function handleMouseLeaveContainer() {
  // Set mouseMovingOverContainer to false when mouse leaves the container
  mouseMovingOverContainer = false;
  // Restore animation speed to normal when mouse leaves the container
  document.getElementById("nextEpisodeBtn").style.animationDuration = "4s";
}

// Function to handle animation end event
function handleAnimationEnd() {
  // Check if mouse is not moving over the container
  if (!mouseMovingOverContainer) {
    // Switch video and play automatically when animation ends only if mouse is not moving over the container
    switchVideo();
  }
}

// Function to switch video and play automatically
function switchVideo() {
  // Pause the currently playing video
  document.querySelectorAll(".video").forEach((video) => {
    if (!video.paused) {
      video.pause();
    }
  });

  // Hide all videos and show the next one
  const videos = document.querySelectorAll(".video");
  let nextVideoIndex = (currentVideoIndex + 1) % videos.length;
  videos[currentVideoIndex].style.display = "none";
  videos[nextVideoIndex].style.display = "block";
  videos[nextVideoIndex].play(); // Start autoplaying the next video

  // Update current video index
  currentVideoIndex = nextVideoIndex;
}

// Variable to keep track of the current video index
let currentVideoIndex = 0;

// Add event listener for the button click
document.getElementById("nextEpisodeBtn").addEventListener("click", function () {
  // Switch to the next video
  switchVideo();
});

// Add event listeners for mouse movements
document.getElementById("videoContainer").addEventListener("mousemove", handleMouseMoveOverContainer);
document.getElementById("videoContainer").addEventListener("mouseleave", handleMouseLeaveContainer);

// Add event listener for animation end
document.getElementById("nextEpisodeBtn").addEventListener("animationend", handleAnimationEnd);
