var convertAllImages = function (node) {
    'use strict';
    var i, images = node.getElementsByTagName("img");
    console.log(images.length);
    for (i = 0; i < images.length; i = i + 1) {
        images[i].src = "http://osric.com/chris/images/business-cat-meme.jpg";
    }
};

convertAllImages(document.body);
function scrollFunction() {
    'use strict';
    convertAllImages(document.body);
}

window.onscroll = scrollFunction;
