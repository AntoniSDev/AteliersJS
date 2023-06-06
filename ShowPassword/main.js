/* Variable pour sélectionner la checkbox */
const showPassword = document.querySelector("#checkbox");

/* Variable pour sélectionner le texte dans l'input de mot de passe */
const passwordField = document.querySelector("#input");

/* Variable pour selectionner le eye */
const eye = document.querySelector("#eye");




/* Listener sur la checkbox */
showPassword.addEventListener("click", function(){
    /* Création de la fonction pour basculer le type de l'input password entre text et password */

    /* Création d'une variable 'type' qui vérifie si le type de l'input est actuellement 'password'.
       Si c'est le cas, elle est changée en 'text'. Sinon, elle est changée en 'password'. */
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    
    /* Changer le type de l'input passwordField avec la valeur de la variable 'type' */
    passwordField.setAttribute("type", type);

    /* Modifier le texte du span ayant l'id 'display' en fonction de si le mot de passe est affiché ou non */
    const displaySpan = document.querySelector("#display");
    displaySpan.textContent = type === "password" ? "Show" : "Hide";
});





/* Listener sur le eye pour l'événement mousedown avec le meme code copié*/
eye.addEventListener("mousedown", function() {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    const displaySpan = document.querySelector("#display");
    displaySpan.textContent = type === "password" ? "Show" : "Hide";
});

/* Listener sur le eye pour l'événement mouseup */
eye.addEventListener("mouseup", function() {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    const displaySpan = document.querySelector("#display");
    displaySpan.textContent = type === "password" ? "Show" : "Hide";
});