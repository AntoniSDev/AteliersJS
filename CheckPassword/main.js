// Recupérer les elements
const form = document.getElementById("myForm");
const password = form.password;
const confirmPassword = form.checkpassword;
const message = document.getElementById("message");
const message2 = document.getElementById("message2");

// Booléens pour les critère des mot de passe
let isPasswordMatch = false;
let isPasswordLenght = false;
let isPasswordUpper = false;
let isPasswordLower = false;
let isPasswordNumber = false;
let isPasswordSpecial = false;

// Fonction de solidité du mot de passe
function isPasswordHard() {
  // constantes pour les conditions
  const regexUppercase = /[A-Z]/;
  const regexLowercase = /[a-z]/;
  const regexNumber = /[0-9]/;
  const regexSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

  // Vériciation des conditions
    // longueur
  if (password.value.length >= 8) {
    isPasswordLenght = true;
  } 
    // majuscule
  if (regexUppercase.test(password.value)) {
    isPasswordUpper = true;
  }
    // minuscule
  if (regexLowercase.test(password.value)) {
    isPasswordLower = true;
  }
    // un chiffre
  if (regexNumber.test(password.value)) {
    isPasswordNumber = true;
  }
    // caractère spécial
  if (regexSpecialChar.test(password.value)) {
    isPasswordSpecial = true;
  }
}

// Fonction pour afficher la force du mot de passe
function displayPasswordStrength() {
    if (
        isPasswordLenght &&
        isPasswordUpper &&
        isPasswordLower &&
        isPasswordNumber &&
        isPasswordSpecial
    ) {
        // si tout es true  afficher le message
      message2.innerHTML = "Mot de passe sécurisé";
        // sinon 
    } else {
      let strengthMessage = "Mot de passe faible :";
  
      if (!isPasswordLenght) {
        strengthMessage += " 8 caractères requis,";
      }
  
      if (!isPasswordUpper || !isPasswordLower) {
        strengthMessage += " une majuscule et une minuscule requis,";
      }
  
      if (!isPasswordNumber) {
        strengthMessage += " un chiffre requis,";
      }
  
      if (!isPasswordSpecial) {
        strengthMessage += " un caractère spécial requis,";
      } 
  
      message2.innerHTML = strengthMessage;
    }
  }



// Event listenner sur le champ confirm password avec la function
confirmPassword.addEventListener("input", () => {
  if (password.value != confirmPassword.value) {
    message.innerHTML = "Les mots de passe ne correspondent pas.";
    isPasswordMatch = false;
  } else {
    message.innerHTML = "";
    isPasswordMatch = true;
  }
});

// Event listener sur le champ password aec la function
password.addEventListener("input", () => {
    isPasswordHard();
    displayPasswordStrength();
});



// Ajout du onsubmit sur le formulaire pour submit seulement si les mot de passed sont ok
form.onsubmit = function () {
  if (isPasswordMatch) {
    alert("Formulaire envoyé");
    return true;
  }
  alert("Mots de passe différents");
  return false;
};
