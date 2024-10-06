// Initialize the Pannellum viewer
var viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "360.jpg", // Your 360 panorama image
    "autoLoad": true,
    "compass": true,
    "hfov": 110, // Horizontal FOV (zoom level)
    "yaw": 180, // Set initial yaw value
    "showControls": true // Ensure controls are visible for interaction
});

// Function to update the degree indicator
function updateDegreeIndicator() {
    // Get the current yaw (rotation) of the viewer
    var yaw = viewer.getYaw();
    
    // Normalize the yaw to be between 0 and 360
    var degree = yaw % 360;
    if (degree < 0) {
        degree += 360;
    }

    // Debugging: Log the yaw value to the console to verify it is changing
    console.log("Current Yaw: ", yaw);

    // Update the degree indicator text with normalized yaw value
    document.getElementById('degreeIndicator').innerText = `${degree.toFixed(1)}°`;
}

// Add an event listener to update the degree indicator when the view changes
viewer.on('viewchange', updateDegreeIndicator);

// Add a listener for when the panorama is first loaded
viewer.on('load', function () {
    updateDegreeIndicator(); // Initial call when panorama is loaded
});
