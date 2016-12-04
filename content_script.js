convertAllImages(document.body);
function scrollFunction() {
    'use strict';
    convertAllImages(document.body);
}

window.onscroll = scrollFunction;
function convertAllImages(node) {
	'use strict';
	var i, images = node.getElementsByTagName("img");
	console.log(images.length);
	for (i = 0; i < images.length; i = i + 1) {
		images[i].src = "http://osric.com/chris/images/business-cat-meme.jpg";
	}
}

function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E
    'use strict';
    var child, next;
    console.log("walking....");
    switch (node.nodeType) {
    case 1: // Element
        if (node.nodeName === "IMG") {
            //console.log("Image!");
            //console.log(node);
            //console.log(node.src);
            node.src="http://osric.com/chris/images/business-cat-meme.jpg";
        }
        //break;
    case 9:  // Document
        //break;
    case 11: // Document fragment
        child = node.firstChild;
        while (child) {
            next = child.nextSibling;
            walk(child);
            child = next;
        }
    case 3: // Text node
        handleText(node);
        break;
    }
}

function handleText(textNode) {
    'use strict';
    var v = textNode.nodeValue;
    var destinations = ["Applebees", "Olive Garden", "Dave & Busters", "Old Country Buffet", "Hard Rock Cafe", "Red Lobster", "T.G.I. Friday's", "Boston Market", "Bubba Gump Shrimp Company", "Golden Corral"];
    var tim = parseInt(new Date().getTime().toString().substring(7, 8)); //12
    console.log(v);
    if (v !== null) {
        v = v.replace(/\bBurning Man\b/g, destinations[tim]);
        v = v.replace(/\bburning man\b/g, destinations[tim]);
        v = v.replace(/\bblack rock city\b/g, destinations[tim]);
        v = v.replace(/\bBlack Rock City\b/g, destinations[tim]);
        v = v.replace(/\bBurner\b/g, "Bingbonger");
        v = v.replace(/\bBurners\b/g, "Bingbongers");
        v = v.replace(/\bburner\b/g, "Bingbonger");
        v = v.replace(/\bburners\b/g, "Bingbongers");
    }

    textNode.nodeValue = v;
}


