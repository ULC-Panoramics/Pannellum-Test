// Initialize the Pannellum viewer
var viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg",  // Hosted test image
    "autoLoad": true,
    "yaw": 0,
    "compass": true,
    "hfov": 100
});

// Log when the panorama is loaded
viewer.on('load', function() {
    console.log("Panorama loaded");
});

// Log when the view is being changed
viewer.on('viewchange', function() {
    console.log("View is changing");
});
