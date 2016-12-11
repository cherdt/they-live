//background.js
/* jshint "predef": ["chrome", "Event"] */

var sendMessageToContentScript = function () {
    'use strict';
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {command: "Decrypt Images"});
    });
};

chrome.browserAction.onClicked.addListener(sendMessageToContentScript);
