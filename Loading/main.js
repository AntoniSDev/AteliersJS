// Récupérer l'élément de chargement
const loading = document.getElementById("loadingAnimation");
// Récupérer l'élément de contenu à afficher
const content = document.getElementById("displayContent");

// Lorsque la fenêtre a fini de charger
window.onload = function() {
  // Attendre 3000 millisecondes (3 secondes)
  setTimeout(showContent, 3000);  
};

// Fonction pour afficher le contenu après le délai spécifié
function showContent() {
  // Masquer l'animation de chargement en modifiant la propriété "display" à "none"
  loading.style.display = "none";
  // Afficher le contenu en modifiant la propriété "display" à "block"
  content.style.display = "block";
}
