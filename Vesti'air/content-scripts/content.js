chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "addOkButton") {
    addOkButtonToGoogleImages();
  }
});

function addOkButtonToGoogleImages() {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    const okButton = document.createElement("button");
    okButton.innerText = "OK";
    okButton.className = "ok-button";

    okButton.onclick = function() {
      console.log("Bouton OK cliqué pour l'image:", image.src);
      // Ajoutez votre logique ici en réponse au clic sur le bouton OK
    };

    // Ajoute le bouton OK après chaque image
    image.parentNode.insertBefore(okButton, image.nextSibling);
  });
}
