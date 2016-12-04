var THEYLIVE = {

    convertAllImages: function (node) {
        'use strict';
        var i, images;
        if (node instanceof Event) {
            console.log("It's an event");
            node = document.body;
        }
        images = node.getElementsByTagName("img");
        console.log(images.length);
        for (i = 0; i < images.length; i = i + 1) {
            if (!images[i].hasAttribute("decrypted")) {
                images[i].src = "http://osric.com/chris/images/business-cat-meme.jpg";
                images[i].setAttribute("decrypted", "true");
            }
        }
    }

};


THEYLIVE.convertAllImages(document.body);
window.onscroll = THEYLIVE.convertAllImages;
