const werkenbij = document.getElementById("werkenbij");
if (werkenbij) {
    werkenbij.style.color = "green";

}


function wisselOpmaak() {
    document.getElementById("oefenen").classList.toggle("uitgelicht");

}

function draaifoto() {
    document.getElementById("werkfoto").classList.add("gedraaid");
}

function fotorechtop() {
    document.getElementById("werkfoto").classList.remove("gedraaid");
}

function berekeninhoud(lengte, breedte, hoogte) {
    return lengte * breedte * hoogte;

}

const resultaat = berekeninhoud(8, 3, 2);
if (document.getElementById("antwoord")) {
    document.getElementById("antwoord").textContent = resultaat;
}

// Typewriter effect
const words = [
    "CozyBrew",
    "Warm, Cozy, Sustainable",
    "Bedankt voor je bezoek"
];

const textElement = document.getElementById("text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 25;
const pauseAfterTyping = 1500;
const pauseAfterDeleting = 500;

function typeWriter() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        charIndex++;
        textElement.textContent = currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseAfterTyping);
            return;
        }

        setTimeout(typeWriter, typingSpeed);

    } else {
        charIndex--;
        textElement.textContent = currentWord.substring(0, charIndex);

        if (charIndex === 0) {
            isDeleting = false;

            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }

            setTimeout(typeWriter, pauseAfterDeleting);
            return;
        }

        setTimeout(typeWriter, deletingSpeed);
    }
}

if (textElement) {
    typeWriter();
}

async function laadProducten() {

    const response = await fetch("menu.json");
    if (!response.ok) {
        throw new Error(`Request mislukt: ${response.status}`);

    }
    return await response.json();
}

// Functie om productkaart te maken
function maakProductKaart(product) {
    const kaart = document.createElement("article");
    kaart.className = "kaart";
    kaart.dataset.categorie = product.categorie;

    const foto = document.createElement("img");
    foto.className = "product-foto";
    foto.src = "../../images/Producten/" + product.afbeelding;
    foto.alt = "Foto van " + product.naam;
    kaart.appendChild(foto);

    const titel = document.createElement("h2");
    titel.textContent = product.naam;
    kaart.appendChild(titel);

    const omschrijving = document.createElement("p");
    omschrijving.textContent = product.omschrijving;
    kaart.appendChild(omschrijving);

    const prijs = document.createElement("p");
    prijs.className = "prijs";
    prijs.textContent = "€ " + product.prijs.toLocaleString("nl-NL") + ",-";
    kaart.appendChild(prijs);

    const knop = document.createElement("button");
    knop.className = "winkelwagen-knop";
    knop.textContent = "In winkelwagen";
    kaart.appendChild(knop);

    return kaart;
}

const productenOverzicht = document.querySelector(".productenoverzicht");

const menuStatus = document.querySelector("#menuStatus");

async function toonMenu() {
    menuStatus.textContent = "Menu laden...";
    try {
        const producten = await laadProducten();
        if (producten.length === 0) {
            menuStatus.textContent = "Er zijn geen producten beschikbaar.";
            return;
        }

        producten.forEach(function (product) {
            productenOverzicht.appendChild(maakProductKaart(product));
        });
        menuStatus.textContent = producten.length + " producten geladen";
    } catch (fout) {
        menuStatus.textContent = "Het menu kon niet worden geladen. Probeer het later opnieuw.";
        console.error(fout);
    }



}

if (productenOverzicht) {
    toonMenu();
}

// Darkmode functie

const darkKnop = document.getElementById("dark-knop");

if (darkKnop) {
    darkKnop.addEventListener("click", function () {
        document.body.classList.toggle("donker");

    });
}


// Accessibility functionaliteit

const accessibilityKnop = document.querySelector('#accessibility-knop');

if (accessibilityKnop) {
    accessibilityKnop.addEventListener('click', toggleAccessibility);
}

// Toggle functionaliteit voor de accesibility knop
function toggleAccessibility() {
    document.documentElement.classList.toggle('accessibility');

    if (document.documentElement.classList.contains('accessibility')) {
        localStorage.setItem('accessibilityValue', 'on');
    } else {
        localStorage.setItem('accessibilityValue', 'off');
    }
}

function localStorageCheckAccessibility() {
    if (localStorage.getItem('accessibilityValue') == "on") {
        document.documentElement.classList.add('accessibility');
    }
}

localStorageCheckAccessibility();

// Openingsuren functie
const uur = new Date().getHours();
const dagNaam = new Date().toLocaleDateString('nl-NL', { weekday: 'long' });
const datum = new Date().toLocaleDateString('nl-NL');
const dagNummer = new Date().getDate();
const maandNummer = new Date().getMonth() + 1; //Maanden tellen vanaf 0, dus +1

console.log("Het is vandaag " + dagNaam + " (" + datum + ").");

let openGesloten;
if (dagNummer === 1 && maandNummer === 1) {
    openGesloten = "Gesloten";
} else if (dagNummer === 25 && maandNummer === 12) {
    openGesloten = "Gesloten";
} else if (dagNummer === 26 && maandNummer === 12) {
    openGesloten = "Gesloten";
} else if (dagNaam === "maandag") {
    openGesloten = "Open van 12:00 tot 18:00.";
} else if (dagNaam === "dinsdag") {
    openGesloten = "Open van 12:00 tot 18:00.";
} else if (dagNaam === "woensdag") {
    openGesloten = "Open van 12:00 tot 18:00.";
} else if (dagNaam === "donderdag") {
    openGesloten = "Open van 12:00 tot 21:00.";
} else if (dagNaam === "vrijdag") {
    openGesloten = "Open van 12:00 tot 18:00.";
} else if (dagNaam === "zaterdag") {
    openGesloten = "Open van 09:00 tot 16:00.";
} else if (dagNaam === "zondag") {
    openGesloten = "Open van 10:00 tot 16:00.";
} else {
    openGesloten = "Er is iets misgegaan bij het berekenen van de dag.";
}
console.log(openGesloten);
document.getElementById("openGesloten").innerHTML = openGesloten;

