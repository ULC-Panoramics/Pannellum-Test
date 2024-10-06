// Initialize the Pannellum viewer
var viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "360.jpg", // Replace with your 360 panorama image
    "autoLoad": true,
    "compass": true, // Enable the compass at the bottom right
    "hfov": 110, // Horizontal field of view (zoom level)
    "yaw": 180, // Set initial yaw value
    "showControls": true // Ensure controls are visible for interaction
});

// Function to update the degree indicator dynamically
function updateDegreeIndicator() {
    // Get the current yaw (rotation) of the viewer
    var yaw = viewer.getYaw();
    
    // Normalize the yaw to be between 0 and 360 degrees
    var degree = yaw % 360;
    if (degree < 0) {
        degree += 360;
    }

    // Debugging: Log the current yaw value to verify it's changing
    console.log("Current Yaw (raw): ", yaw);
    console.log("Current Degree (normalized): ", degree.toFixed(1));

    // Update the degree indicator text with the normalized yaw value
    document.getElementById('degreeIndicator').innerText = `${degree.toFixed(1)}°`;
}

// Ensure the degree indicator updates whenever the view changes
viewer.on('viewchange', updateDegreeIndicator);

// Ensure the degree indicator updates when the panorama is first loaded
viewer.on('load', updateDegreeIndicator);

// Initial call to set the degree on load
updateDegreeIndicator();
