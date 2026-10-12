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

//const producten
const producten = [
    //koffie
    {
        naam: "espresso",
        categorie: "Koffie",
        afbeelding: "espresso.png",
        omschrijving: "Krachtige, geconcentreerde koffie met een rijke smaak en een romige crema.",
        prijs: 2.50
    },
    {
        naam: "cappuccino",
        categorie: "Koffie",
        afbeelding: "cappuccino.png",
        omschrijving: "Zachte, romige koffie met een lichte schuimlaag en een rijke smaak.",
        prijs: 3.00
    },
    {
        naam: "Latte macchiato",
        categorie: "Koffie",
        afbeelding: "latte-macchiato.png",
        omschrijving: "Koffie met romige melk en een lichte schuimlaag.",
        prijs: 3.50
    },
    {
        naam: "Flat white",
        categorie: "Koffie",
        afbeelding: "flat-white.png",
        omschrijving: "Zachte koffie met een lichte schuimlaag en een rijke smaak.",
        prijs: 3.50
    },
    {
        naam: "Havermelk Latte",
        categorie: "Koffie",
        afbeelding: "havermelk-latte.png",
        omschrijving: "Koffie met romige havermelk en een lichte schuimlaag.",
        prijs: 3.50
    },
    //Thee
    {
        naam: "Groene thee",
        categorie: "Thee",
        afbeelding: "groene-thee.png",
        omschrijving: "Frisse, lichtgeurige thee met een frisse smaak.",
        prijs: 2.00
    },
    {
        naam: "Earl Grey",
        categorie: "Thee",
        afbeelding: "earl-grey.png",
        omschrijving: "Classieke, aromatische thee met een frisse smaak.",
        prijs: 2.00
    },
    {
        naam: "Verse muntthee",
        categorie: "Thee",
        afbeelding: "verse-muntthee.png",
        omschrijving: "Frisse, aromatische thee met een verse muntgeur.",
        prijs: 2.00
    },
    {
        naam: "Rooibos Vanille",
        categorie: "Thee",
        afbeelding: "rooibos-vanille.png",
        omschrijving: "Natuurlijke, zoete thee met een rijke smaak.",
        prijs: 2.00
    },
    {
        naam: "Chai Latte",
        categorie: "Thee",
        afbeelding: "chai-latte.png",
        omschrijving: "Aromatische thee met een rijke smaak.",
        prijs: 2.00
    },
    //Dranken
    {
        naam: "Verse Jus d'Orange",
        categorie: "Dranken",
        afbeelding: "verse-jus-d-orange.png",
        omschrijving: "Frisse, natuurlijke jus met een frisse smaak.",
        prijs: 3.00
    },
    {
        naam: "Cola",
        categorie: "Dranken",
        afbeelding: "cola.png",
        omschrijving: "Frisse, koolzuurhoudende drank met een frisse smaak.",
        prijs: 2.50
    },
    {
        naam: "Spa Rood",
        categorie: "Dranken",
        afbeelding: "spa-rood.png",
        omschrijving: "Drank met een frisse smaak.",
        prijs: 2.50
    },
    {
        naam: "Ice Tea",
        categorie: "Dranken",
        afbeelding: "ice-tea.png",
        omschrijving: "Frisse, koolzuurhoudende drank met een frisse smaak.",
        prijs: 2.50
    },
    {
        naam: "Appelsap",
        categorie: "Dranken",
        afbeelding: "appelsap.png",
        omschrijving: "Zoete, fruitige appelsap, ook favoriet bij kinderen.",
        prijs: 2.50
    },
    //Gebak
    {
        naam: "Appeltaart",
        categorie: "Gebak",
        afbeelding: "appeltaart.png",
        omschrijving: "Krokante, zoete taart met verse appels.",
        prijs: 2.50
    },
    {
        naam: "Brownie",
        categorie: "Gebak",
        afbeelding: "brownie.png",
        omschrijving: "Krokante, chocolade-geurige taart met een rijke smaak.",
        prijs: 2.50
    },
    {
        naam: "Cheesecake",
        categorie: "Gebak",
        afbeelding: "cheesecake.png",
        omschrijving: "Rijke, roomkaas-geurige taart met een frisse smaak.",
        prijs: 2.50
    },
    {
        naam: "Croissant",
        categorie: "Gebak",
        afbeelding: "croissant.png",
        omschrijving: "Krokante, boterige taart met een frisse smaak.",
        prijs: 2.50
    },
    {
        naam: "Veganistische Cookie",
        categorie: "Gebak",
        afbeelding: "veganistische-cookie.png",
        omschrijving: "Krokante, plantaardige cookie met een frisse smaak.",
        prijs: 2.50
    },
    // Andere dranken
    {
        naam: "Warme chocolademelk",
        categorie: "Andere dranken",
        afbeelding: "warme-chocolademelk.png",
        omschrijving: "Warme, chocolade-geurige melk met een rijke smaak.",
        prijs: 2.50
    },
    {
        naam: "Smoothie Aardbei-banaan",
        categorie: "Andere dranken",
        afbeelding: "smoothie-aardbei-banaan.png",
        omschrijving: "Frisse, natuurlijke smoothie met een frisse smaak.",
        prijs: 3.00
    },
    {
        naam: "Milkshake Vanille",
        categorie: "Andere dranken",
        afbeelding: "milkshake-vanille.png",
        omschrijving: "Rijke, vanille-geurige shake met een frisse smaak.",
        prijs: 3.00
    },
    {
        naam: "Golden Latte",
        categorie: "Andere dranken",
        afbeelding: "golden-latte.png",
        omschrijving: "Warme kurkumamelk met kaneel, gember en een snufje peper.",
        prijs: 3.50
    },
    {
        naam: "Matcha Latte",
        categorie: "Andere dranken",
        afbeelding: "matcha-latte.png",
        omschrijving: "Rijke, groene thee-geurige latte met een frisse smaak.",
        prijs: 3.50
    }
]

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

if (productenOverzicht) {
    producten.forEach(function (product) {
        productenOverzicht.appendChild(maakProductKaart(product));
    });
}



// Menu-kaarten opbouwen met fetch()
const menuOverzicht = document.querySelector('#menu');
const statusLine = document.querySelector('#statusLine');

if (menuOverzicht) {
    async function createMenu() {
        statusLine.textContent = 'Aan het laden...';
        try {
            const response = await fetch('https://api.sampleapis.com/coffee/hot');
            if (!response.ok) {
                throw new Error(`Nah this ain't right bro: ${response.status}.`);
            }

            const totalMenu = await response.json();
            const menu = totalMenu.slice(0, 18);

            if (menu.length == 0) {
                statusLine.textContent = `Er zijn ${menu.length} items gevonden.`;
            } else {
                menu.forEach(appendMenuItems);
                statusLine.textContent = `Er zijn ${menu.length} items geladen.`;
            }

        } catch (error) {
            statusLine.textContent = 'Menu kon niet worden geladen, probeer het later opnieuw.';
            console.error(`Something went wrong: ${error}`);
        }
    }

    function appendMenuItems(item) {
        menuOverzicht.appendChild(buildItems(item));
    }

    function buildItems(item) {
        const itemBox = document.createElement('article');
        itemBox.classList.add('kaart');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = `Foto van ${item.title}`;

        const title = document.createElement('h2');
        title.textContent = item.title;

        const ingredients = document.createElement('p');
        const ingredientList = item.ingredients.join(', ');
        ingredients.textContent = ingredientList;

        itemBox.appendChild(image);
        itemBox.appendChild(title);
        itemBox.appendChild(ingredients);

        return itemBox;

    }

    createMenu();

}

// Darkmode functie

const darkKnop = document.getElementById("dark-knop");

if (darkKnop) {
    darkKnop.addEventListener("click", function () {
        document.body.classList.toggle("donker");

    });
}


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

