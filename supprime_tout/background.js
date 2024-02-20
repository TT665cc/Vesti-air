// background.js
var permissionState = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'permissionResponse') {
    permissionState = request.granted;
  }
});
