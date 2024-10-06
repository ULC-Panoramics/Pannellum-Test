console.log("JavaScript is running");  // Add this line to test if the script is running

// Initialize the Pannellum viewer
var viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg",  // Hosted test image
    "autoLoad": true,
    "yaw": 0,
    "compass": true,
    "hfov": 100,
    "showControls": true  // Enable controls for interaction
});

// Log when the panorama is loaded
viewer.on('load', function() {
    console.log("Panorama loaded");
});

// Test the mousedown event to see if interaction events are being captured
viewer.on('mousedown', function() {
    console.log("Mouse down - interaction detected");
});

// Test the viewchange event again to see if it fires when the view is moved
viewer.on('viewchange', function() {
    console.log("View is changing");
});
