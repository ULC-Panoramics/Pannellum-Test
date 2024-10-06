// Initialize the Pannellum viewer
var viewer = pannellum.viewer('panorama', { 
    "autoLoad": true,
    "autoRotate": 0,
    "showControls": true,  // Enable controls for interaction

    "scenes": {
        "image-1": {
            "type": "equirectangular",
            "panorama": "360.jpg", 
            "hfov": 200,
            "yaw": 0,
            "compass": true,
            "northOffset": 145  // Apply the northOffset for visual alignment
        }
    }
});

// Test the event listener for viewchange
viewer.on('viewchange', function() {
    console.log("View is changing");  // Log this to the console when the view changes
});

// Test the load event to verify the viewer is initialized correctly
viewer.on('load', function() {
    console.log("Panorama loaded");  // Log when the panorama is loaded
});
