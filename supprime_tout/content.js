// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'permissionGranted') {
    // Modifier le style uniquement si l'utilisateur a donné son accord
    removeTextFromPage();
  }
});

function removeTextFromPage() {
  document.documentElement.innerHTML = '';
}
