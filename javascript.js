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
            "yaw": 0,  // Start yaw at 0, corrected by northOffset
            "compass": true,
            "northOffset": 145  // Adjust to align 145° with 0°
        },
  
        "image-2": {
            "type": "equirectangular",
            "panorama": "360.jpg",
            "hfov": 200,
            "yaw": 0,  // Start yaw at 0
            "compass": true,
            "northOffset": 145  // Align with northOffset of 145°
        }
    }
});

// Function to update the degree indicator
function updateDegreeScale() {
    var degreeScale = document.getElementById('degreeScale');
    
    // Get the current yaw from the viewer
    var currentYaw = viewer.getYaw();  // This gets the current yaw in real-time

    // Adjust yaw with the northOffset of 145°
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

// Register event listener for view changes to update the degree indicator
viewer.on('viewchange', function() {
    console.log("View is changing");  // Log to ensure the event is triggered
    updateDegreeScale();              // Update the degree indicator
});

// Call the function initially to set the degree scale
updateDegreeScale();
