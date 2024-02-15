
let mouseMovingOverContainer = false;


function handleMouseMoveOverContainer() {

  mouseMovingOverContainer = true;
  
  // Speed up aniamtion
  document.getElementById("nextEpisodeBtn").style.animationDuration = "0.1s";
}


function handleMouseLeaveContainer() {
  mouseMovingOverContainer = false;
  // Restore animation speed to normal when mouse leaves the container
  document.getElementById("nextEpisodeBtn").style.animationDuration = "4s";
}

function handleAnimationEnd() {
  // Check if mouse is not moving over the container
  if (!mouseMovingOverContainer) {
    // Switch video and play automatically when animation ends only if mouse is not moving over the container
    switchVideo();
  }
}


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
  videos[nextVideoIndex].play(); 
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
