// popup.js
document.addEventListener('DOMContentLoaded', function () {
  var modifyButton = document.getElementById('modifyStyle');

  modifyButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.create({ url: chrome.extension.getURL('confirm.html') });
    });
  });
});
