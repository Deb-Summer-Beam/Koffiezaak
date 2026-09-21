console.log("JavaScript werkt");

function berekenInhoud() {
    const hoogte = document.getElementById("hoogte").value;
    const breedte = document.getElementById("breedte").value;
    const diepte = document.getElementById("diepte").value;

    const resultaat = hoogte * breedte * diepte;
    document.getElementById("resultaat").innerHTML = resultaat + " cm³";
}