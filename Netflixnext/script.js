let mouseMovingOverContainer = false;

// Function to handle mousemove event over the container
function handleMouseMoveOverContainer() {
  mouseMovingOverContainer = true;
  // Set animation speed fast
  document.getElementById("nextEpisodeBtn").style.animationDuration = "0.1s";
}

// Function to handle button click event
document.getElementById("nextEpisodeBtn").addEventListener("click", function () {
  // Change color of the container
  document.querySelector(".container").style.backgroundColor = getRandomColor();
});

// Function to handle animation end event
function handleAnimationEnd() {
  // Check if mouse is not moving over the container
  if (!mouseMovingOverContainer) {
    // Change color of the container
    document.querySelector(".container").style.backgroundColor = getRandomColor();
  }
}

// Random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// event listeners for mouse movements
document.getElementById("videoContainer").addEventListener("mousemove", handleMouseMoveOverContainer);

// animation end
document.getElementById("nextEpisodeBtn").addEventListener("animationend", handleAnimationEnd);

