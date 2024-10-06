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
            "panorama": "360.jpg", 
            "hfov": 200,
            "yaw": 0,  // Set the initial yaw as 0 for the view
            "compass": true,
            "northOffset": 145  // Adjust this to align the visual direction to 0°
        },
  
        "image-2": {
            "type": "equirectangular",
            "panorama": "360.jpg",
            "hfov": 200,
            "yaw": 0,  // Again, start this at 0° relative to the new orientation
            "compass": true,
            "northOffset": 145  // Same northOffset applied
        }
    }
});

// Function to update degree scale
function updateDegreeScale() {
    var degreeScale = document.getElementById('degreeScale');
    var adjustedYaw = viewer.getYaw();  // Get current yaw directly from viewer

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

// Event listener to update the degree scale during view changes
viewer.on('viewchange', updateDegreeScale);

// Call the function initially to set the degree scale
updateDegreeScale();
