document.getElementById("input").addEventListener("keyup", function(event) {
    // Récupère l'état du Verrouillage Majuscule (Caps Lock)
    const capsLockEnabled = event.getModifierState("CapsLock");
  
    // Récupère l'état du Verrouillage Numérique (Num Lock)
    const numLockEnabled = event.getModifierState("NumLock");
  
    // Sélectionne l'élément du message d'avertissement
    const warningElement = document.getElementById("warning");
  


    // Vérifie si à la fois le Verrouillage Majuscule et le Verrouillage Numérique sont activés
    if (capsLockEnabled && numLockEnabled) {
      // Affiche le message d'alerte correspondant
      warningElement.textContent = "⚠️ Caps Lock and Num Lock are activated...";
    }
    // Vérifie si uniquement le Verrouillage Majuscule est activé
    else if (capsLockEnabled) {
      // Affiche le message d'alerte correspondant
      warningElement.textContent = "⚠️ Caps Lock is activated...";
    }
    // Vérifie si uniquement le Verrouillage Numérique est activé
    else if (numLockEnabled) {
      // Affiche le message d'alerte correspondant
      warningElement.textContent = "⚠️ Num Lock is activated...";
    }
    // Si aucun des verrouillages n'est activé
    else {
      // Efface le contenu du message d'alerte
      warningElement.textContent = "";
    }
  
    
    // Affiche ou masque le message d'alerte en fonction des verrouillages activés
    if (capsLockEnabled || numLockEnabled) {
      warningElement.style.display = "block";
    } else {
      warningElement.style.display = "none";
    }
  });
  