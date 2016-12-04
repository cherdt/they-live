var THEYLIVE = {
    convertAllImages: function (node) {
        'use strict';
        var i, images = node.getElementsByTagName("img");
        console.log(images.length);
        for (i = 0; i < images.length; i = i + 1) {
            images[i].src = "http://osric.com/chris/images/business-cat-meme.jpg";
        }
    },

    scrollFunction: function () {
        'use strict';
        this.convertAllImages(document.body);
    }
};


THEYLIVE.convertAllImages(document.body);
window.onscroll = THEYLIVE.scrollFunction;
