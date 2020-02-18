THEY LIVE
=========
Steganographic Decryption, of sorts
-----------------------------------

A Chrome browser extension that decrypts images on 
a web page that are encrypted in a very particular 
(and trivial) way. All images are processed as if 
they are encrypted, except as restricted by the
browser (see Known Issues).

This project is just-for-fun, mostly to look deeper
into image manipulation using Javascript and the 
HTML5 canvas element.

Install
-------

* [Download the extension](https://osric.com/chris/steganography/theylive.crx)
* Verify the current MD5 checksum: fb7db8fca9b70777424742d1aa79c437
* Open the Chrome extensions page: chrome://extensions/
* Drag the extension file (theylive.crx) into the Chrome extensions page

### Installation Notes

* Enable Developer Mode on chrome://extensions/
* Recent versions of Chrome may prevent you from downloading and/or installing the file (an error such as `CRX_REQUIRD_PROOF_MISSING` may be displayed). You can probably still download the .crx file using another browser, or via `curl: curl -o ~/Downloads/theylive.crx https://osric.com/chris/steganography/theylive.crx`
* If you get a message that says "Extensions, Apps, and Themes can harm your computer. Are you sure you want to continue?", try selecting "Show All" -- "Keep" and "Keep Anyway"
* If that doesn't work, you can always clone this repo and select "Load Unpacked" on chrome://extensions/
* Chrome will warn you that the extension can "Read and change all your data on the websites you visit". That's true, and is understandably terrifying.

Use
---
Once installed, click the "THEY LIVE" button in Chrome 
to decrypt images on the current tab (web page).

Demo Page
---------
[https://osric.com/chris/business-cat.html](https://osric.com/chris/business-cat.html)

Known Issues
------------
As mentioned above, Due to Chrome security restrictions, you may not be able to install the CRX at all. See https://developer.chrome.com/extensions/external_extensions. You may still be able to use the Load Unpacked option to add it to your browser.

Due to browser security restrictions, this plugin will 
operate only on images loaded from the same site as the 
web page in which they are embedded.

Thanks
------
Thanks to Ben Mullins's "Burning Man Enhancer" Chrome extension
for getting this started.
