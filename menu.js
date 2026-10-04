console.log("menu.js werkt");

const koffies = [
    { naam: "Espresso", prijs: 2.50 },
    { naam: "Americano", prijs: 3.00 },
    { naam: "Cappuccino", prijs: 3.50 },
    { naam: "Latte Macchiato", prijs: 3.75 },
    { naam: "Flat White", prijs: 3.75 },
    { naam: "Ijskoffie", prijs: 3.75 }
];

// Zoek de koffiesectie in de HTML
//const koffieLijst = document.getElementById("koffieLijst");


// Functie die één koffieregel maakt
//function maakKoffieRegel(koffie) {

    // Maak een nieuw <p>-element
    //const regel = document.createElement("p");

    // Zet de naam en prijs veilig in het element
    //regel.textContent =
       // koffie.naam +
      //  " - €" +
       // koffie.prijs.toFixed(2).replace(".", ",");

    // Geef de gemaakte regel terug
    //return regel;



// Zoek de koffiesectie in de HTML
const koffieLijst = document.getElementById("koffieLijst");


// Functie die één koffieregel maakt
function maakKoffieRegel(koffie) {

    // Maak een nieuw <p>-element
    const regel = document.createElement("p");

    // Zet de naam en prijs veilig in het element
    regel.textContent =
        koffie.naam +
        " - €" +
        koffie.prijs.toFixed(2).replace(".", ",");

    // Geef de gemaakte regel terug
    return regel;
}


// Verwerk iedere koffie uit de array
koffies.forEach((koffie) => {

    // Laat de functie één koffieregel maken
    const regel = maakKoffieRegel(koffie);

    // Voeg de gemaakte regel toe aan de koffiesectie
    koffieLijst.appendChild(regel);
});