/* jshint "browser": true, "bitwise": false, "predef": ["chrome", "Event"] */

var decryptImage = function (canvasNode) {
    'use strict';
    var canvasContext, pixelData, i, rgb;
    canvasContext = canvasNode.getContext('2d');
    pixelData = canvasContext.getImageData(0, 0, canvasNode.width, canvasNode.height);
    // loop over all pixels and get the lowest-information red bit
    for (i = 0; i < pixelData.data.length; i = i + 4) {
        // bitwise-and the red value
        if ((pixelData.data[i] & 1) === 1) {
            rgb = 255; // white
        } else {
            rgb = 0; // black
        }

        pixelData.data[i] = rgb; // set red pixel
        pixelData.data[i + 1] = rgb; // set green pixel
        pixelData.data[i + 2] = rgb; // set blue pixel
        pixelData.data[i + 3] = 255; // alpha = 100%
    }
    // re-draw the canvas element with the new black & white image
    canvasContext.putImageData(pixelData, 0, 0);
};

var THEYLIVE = {

    convertAllImages: function (node) {
        'use strict';
        var i, images, imageNode, parentNode, canvasNode, canvasContext;
        if (node instanceof Event) {
            console.log("It's an event");
            node = document.body;
        }

        images = node.getElementsByTagName("img");

        for (i = 0; i < images.length; i = i + 1) {
            imageNode = images[i];
            //imageNode.crossOrigin = "Anonymous";
            if (!imageNode.hasAttribute("decrypted")) {
                parentNode = imageNode.parentNode;
                canvasNode = document.createElement("canvas");
                canvasNode.height = imageNode.offsetHeight;
                canvasNode.width = imageNode.offsetWidth;
                canvasNode.style.height = canvasNode.height + "px";
                canvasNode.style.width = canvasNode.width + "px";
                parentNode.insertBefore(canvasNode, imageNode);
                canvasContext = canvasNode.getContext('2d');
                try {
                    // Draw the (scaled) image to the Canvas element
                    canvasContext.drawImage(imageNode, 0, 0, imageNode.width, imageNode.height);
                    // Convert image
                    try {
                        decryptImage(canvasNode);
                        // Set flag so we don't re-process
                        imageNode.setAttribute("decrypted", "true");
                        // Hide the original image
                        imageNode.style.display = "none";
                    } catch (err) {
                        console.log("unable to decrypt image: " + err);
                        // decrypt failed, so remove the canvas
                        parentNode.removeChild(canvasNode);
                        // replace the image with gray pixels
                        // not sure this makes sense to the user
                        // imageNode.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII=";
                    }

                } catch (e) {
                    console.log("an error occurred: " + e);
                }

            }
        }
    }

};

// Listen for a specific message from the background
chrome.runtime.onMessage.addListener(
    function (request) {
        'use strict';
        if (request.command === "Decrypt Images") {
            THEYLIVE.convertAllImages(document.body);
        }
    }
);
