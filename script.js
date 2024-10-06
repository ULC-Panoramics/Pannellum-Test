// Initialize the Pannellum viewer
var viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "360.jpg", // Your 360 panorama image
    "autoLoad": true,
    "compass": true,
    "hfov": 110,
    "pitch": 0,
    "yaw": 180, // Start facing south (adjust as needed)
    "showControls": false
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

    // Update the degree indicator text
    document.getElementById('degreeIndicator').innerText = `${degree.toFixed(1)}°`;
}

// Add an event listener to update the degree indicator when the view changes
viewer.on('viewchange', updateDegreeIndicator);

// Initial call to set the degree on load
updateDegreeIndicator();
