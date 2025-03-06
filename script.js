
// Récupération de l'élément qui va changer de couleur
const overlay = document.getElementById("product-shape");
// Ajout de la fonction changeColor à tous les éléments cliquable
var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
el[i].onclick = changeColor;
}
// définition de la fonction changeColor
function changeColor(e) {
// get the hex color
10
let hex = e.target.getAttribute("data-hex");
// set the hex color
overlay.style.fill = hex;
}
function changeColor(picker) {
// Set the fill style
overlay.style.fill = picker.toHEXString();
}
// Sélection de l'élément qui change de couleur
const productShape = document.getElementById("product-shape");

// Ajout de l'événement de clic à chaque couleur prédéfinie
document.querySelectorAll(".color").forEach(button => {
  button.addEventListener("click", function () {
    let newColor = button.getAttribute("data-hex");
    productShape.style.fill = newColor; // Change la couleur avec animation
  });
});

// Fonction pour changer la couleur avec jscolor
function changeColor(picker) {
  productShape.style.fill = picker.toHEXString(); // Convertit la couleur en hexadécimal
}

