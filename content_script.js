var decryptImage = function (canvasNode) {
    'use strict';
    var canvasContext, pixelData, tempPixelData, i, rgb;
    console.log("decrypt image");
    console.log(canvasNode);
    canvasContext = canvasNode.getContext('2d');
    pixelData = canvasContext.getImageData(0, 0, 200, 200);
    console.log('pixelData: ' + pixelData);
    console.log('how many pixels data: ' + pixelData.data.length);
    for (i = 0; i < pixelData.data.length; i = i + 4) {
        // bitwise-and the red value
        if ((pixelData.data[i] & 1) === 1) {
            rgb = 255;
        } else {
            rgb = 0;
        }
        //console.log(rgb);

        pixelData.data[i] = rgb;
        pixelData.data[i + 1] = rgb;
        pixelData.data[i + 2] = rgb;
        pixelData.data[i + 3] = 255; // alpha = 100%
    }
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
        console.log(images.length);
        for (i = 0; i < images.length; i = i + 1) {
            imageNode = images[i];
            //imageNode.crossOrigin = "Anonymous";
            if (!imageNode.hasAttribute("decrypted")) {
                //images[i].src = "http://osric.com/chris/images/business-cat-meme.jpg";
                parentNode = imageNode.parentNode;
                canvasNode = document.createElement("canvas");
                console.log(imageNode.width);
                console.log(imageNode.src + ":" + imageNode.offsetWidth + "," + imageNode.offsetHeight);
                console.log(imageNode.width + "," + imageNode.height);
                canvasNode.height = imageNode.offsetHeight;
                canvasNode.width = imageNode.offsetWidth;
                canvasNode.style.height = canvasNode.height + "px";
                canvasNode.style.width = canvasNode.width + "px";
                parentNode.insertBefore(canvasNode, imageNode);
                canvasContext = canvasNode.getContext('2d');
                try {
                    console.log(imageNode);
                    // Draw the (scaled) image to the Canvas element
                    canvasContext.drawImage(imageNode, 0, 0, imageNode.width, imageNode.height);
                    //canvasContext.drawImage(imageNode, 0, 0);
                    // Convert image
                    decryptImage(canvasNode);
                    // Set flag so we don't re-process
                    imageNode.setAttribute("decrypted", "true");
                    // Hide the original image
                    //imageNode.style.display = "none";
                } catch (e) {
                    console.log("an error occurred: " + e);
                }


            }
        }
    }

};


window.onload = setTimeout(
    function () {
        'use strict';
        THEYLIVE.convertAllImages(document.body);
    },
    1000
);
window.onscroll = THEYLIVE.convertAllImages;
