console.log("Script chargé");

// Sélection de l'élément qui change de couleur
const productShape = document.getElementById("product-shape");

// Vérification que l'élément existe
if (!productShape) {
    console.error("L'élément #product-shape est introuvable !");
}

// Fonction pour changer la couleur avec jscolor
function changeColor(picker) {
    let newColor = picker.toHEXString();
    console.log("Nouvelle couleur sélectionnée:", newColor);
    if (productShape) {
        productShape.style.fill = newColor;
    }
}

// Ajout de l'événement de clic à chaque couleur prédéfinie
document.querySelectorAll(".color").forEach(button => {
    button.addEventListener("click", function () {
        let newColor = button.getAttribute("data-hex");
        console.log("Changement de couleur par clic :", newColor);
        if (productShape) {
            productShape.style.fill = newColor;
        }
    });
});
