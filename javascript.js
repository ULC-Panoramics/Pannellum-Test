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
            "yaw": 0,  // Initial yaw at 0 to match the correct start point
            "compass": true,
            "northOffset": 145  // Align visual 0° with real-world 145°
        },
  
        "image-2": {
            "type": "equirectangular",
            "panorama": "360.jpg",
            "hfov": 200,
            "yaw": 0,  // Initial yaw at 0
            "compass": true,
            "northOffset": 145  // Align visual 0° with real-world 145°
        }
    }
});

// Function to update degree scale
function updateDegreeScale() {
    var degreeScale = document.getElementById('degreeScale');
    
    // Get the current yaw from the viewer
    var currentYaw = viewer.getYaw();

    // Adjust yaw based on northOffset (145°)
    var adjustedYaw = currentYaw + 145; 

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
