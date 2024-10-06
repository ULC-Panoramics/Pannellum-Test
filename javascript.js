// Set the correct yaw offset (adjust this value to correct the degree difference)
var yawOffset = 145;  // The offset needed to correct the starting position

// Function to update degree scale
function updateDegreeScale() {
    var degreeScale = document.getElementById('degreeScale');
    var currentScene = viewer.getScene();
    var initialYaw = {
      "image-1": 14,
      "image-2": 14
    };

    // Get the adjusted yaw with the offset
    var adjustedYaw = viewer.getYaw() - initialYaw[currentScene] + yawOffset;

    // Normalize the yaw to be between 0 and 360 degrees
    if (adjustedYaw < 0) {
      adjustedYaw += 360;
    }
    if (adjustedYaw >= 360) {
      adjustedYaw -= 360;
    }

    // Update the text content of the degree scale element
    degreeScale.innerText = `${adjustedYaw.toFixed(1)}°`;
}

// Ensure the degree indicator updates whenever the view changes
viewer.on('viewchange', updateDegreeScale);

// Call the function initially to set the degree scale
updateDegreeScale();
