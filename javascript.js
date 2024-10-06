// Set the global yaw offset (difference between 0° and actual start direction)
var yawOffset = 145;  // Adjust this value based on the visual misalignment

// Function to update degree scale
function updateDegreeScale() {
    var degreeScale = document.getElementById('degreeScale');
    var currentScene = viewer.getScene();
    var initialYaw = {
      "image-1": 14, // Adjust if needed
      "image-2": 14  // Adjust if needed
    };

    // Get the current yaw from the viewer and apply the yawOffset correction
    var adjustedYaw = viewer.getYaw() + yawOffset;

    // Normalize the yaw to be between 0 and 360 degrees
    if (adjustedYaw < 0) {
      adjustedYaw += 360;
    }
    if (adjustedYaw >= 360) {
      adjustedYaw -= 360;
    }

    // Update the degree indicator with the corrected yaw
    degreeScale.innerText = `${adjustedYaw.toFixed(1)}°`;
}

// Ensure the degree indicator updates whenever the view changes
viewer.on('viewchange', updateDegreeScale);

// Call the function initially to set the degree scale
updateDegreeScale();
