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
            images[i].src = "http://osric.com/chris/images/business-cat-meme.jpg";
        }
    }

};


THEYLIVE.convertAllImages(document.body);
window.onscroll = THEYLIVE.convertAllImages;
