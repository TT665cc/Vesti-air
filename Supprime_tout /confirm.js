// confirm.js
document.addEventListener('DOMContentLoaded', function () {
    var confirmButton = document.getElementById('confirmButton');
    var cancelButton = document.getElementById('cancelButton');
  
    confirmButton.addEventListener('click', function () {
      // Informer le script de contenu que l'utilisateur a donné son accord
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'permissionGranted' });
      });
  
      // Fermer la page de confirmation
      window.close();
    });
  
    cancelButton.addEventListener('click', function () {
      // Fermer la page de confirmation sans apporter de modifications
      window.close();
    });
  });
  
