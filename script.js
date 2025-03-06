/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

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

