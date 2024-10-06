// Initialize the Pannellum viewer
var viewer = pannellum.viewer('panorama', { 
    "autoLoad": true,
    "autoRotate": 0,
    "showControls": false,  
    "default": {
        "firstScene": "image-1",
    },

    "scenes": {
        "image-1": {
            "type": "equirectangular",
            "panorama": "360.JPG", 
            "hfov": 200,
            "yaw": -145,  // Set the yaw so that 145° becomes the new 0°
            "compass": true,
            "northOffset": 0  // Keep the north offset at 0 or adjust if needed
        },
  
        "image-2": {
            "type": "equirectangular",
            "panorama": "360.JPG",
            "hfov": 200,
            "yaw": -145,  // Set the yaw for image-2 as well
            "compass": true,
            "northOffset": 0
        }
    }
});

// Function to update degree scale
function updateDegreeScale() {
    var degreeScale = document.getElementById('degreeScale');
    var adjustedYaw = viewer.getYaw();

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
