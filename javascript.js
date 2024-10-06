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
            "hfov":200,
            "yaw":14,
            "compass":true,
            "northOffset":-16
        },
  
        "image-2": {
        "type": "equirectangular",
        "panorama": "360.JPG",
        "hfov":200,
        "haov": 360,
        "vaov":150,
        "minPitch":-25,
        "maxPitch": 25,
        "yaw": 14,
        "compass":true,
        "northOffset":-16
      }
    }
});

function togglePopupBackground(containerId, isHover) {
    var container = document.getElementById(containerId);
    if (isHover) {
        container.style.backgroundColor = '';
    } else {
        container.style.backgroundColor = 'rgb(0, 0, 0)';
    }
}

function togglePopupWindows() {
    var popupContainer1 = document.getElementById('popup-container-1');
    var popupContainer2 = document.getElementById('popup-container-2');
    if (popupContainer1.style.display === 'block' || popupContainer2.style.display === 'block') {
        popupContainer1.style.display = 'none';
        popupContainer2.style.display = 'none';
    } else {
        popupContainer1.style.display = 'block';
        popupContainer2.style.display = 'block';
    }
}

// Event listener for height button
document.getElementById('switch-panorama').addEventListener('click', function() {
    togglePopupWindows();
});

// Event listeners for image selection
document.getElementById('image-1').addEventListener('click', function() {
    viewer.loadScene('image-1');
    togglePopupWindows();
});

document.getElementById('image-2').addEventListener('click', function() {
    viewer.loadScene('image-2');
    togglePopupWindows();
});

// Function to update degree scale
function updateDegreeScale() {
    var degreeScale = document.getElementById('degreeScale');
    var currentScene = viewer.getScene();
    var initialYaw = {
      "image-1": 14,
      "image-2": 14
    };
    var adjustedYaw = viewer.getYaw() - initialYaw[currentScene];
    if (adjustedYaw < 0) {
      adjustedYaw += 360;
    }
    degreeScale.innerText = `${adjustedYaw.toFixed(1)}°`;
}

// Event listeners for control buttons
document.getElementById('pan-up').addEventListener('click', function() {
    viewer.setPitch(viewer.getPitch() + 10);
    updateDegreeScale();
});
document.getElementById('pan-down').addEventListener('click', function() {
    viewer.setPitch(viewer.getPitch() - 10);
    updateDegreeScale();
});
document.getElementById('pan-left').addEventListener('click', function() {
    viewer.setYaw(viewer.getYaw() - 10);
    updateDegreeScale();
});
document.getElementById('pan-right').addEventListener('click', function() {
    viewer.setYaw(viewer.getYaw() + 10);
    updateDegreeScale();
});
document.getElementById('zoom-in').addEventListener('click', function() {
    viewer.setHfov(viewer.getHfov() - 10);
    updateDegreeScale();
});
document.getElementById('zoom-out').addEventListener('click', function() {
    viewer.setHfov(viewer.getHfov() + 10);
    updateDegreeScale();
});
document.getElementById('fullscreen').addEventListener('click', function() {
    viewer.toggleFullscreen();
    updateDegreeScale();
});

// Event listener to update degree scale during view change
viewer.on('viewchange', updateDegreeScale);

// Continuously update degree scale during auto-rotation
viewer.on('mousedown', function() {
    setInterval(updateDegreeScale, 100);
});
