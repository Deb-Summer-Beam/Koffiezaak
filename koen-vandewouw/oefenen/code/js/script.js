
function functie1() {
  document.querySelector(".paragraaf").classList.toggle("test");
}
// Functie die de zwarte tekst om de paragraaf plaatst.

function functie2() {
  document.querySelector(".foto").classList.add("draai");
}

function functie3() {
  document.querySelector(".foto").classList.remove("draai");
}

const kleurKnop = document.querySelector("#kleurKnop");
if (kleurKnop) {
  kleurKnop.addEventListener("click", functie1);
}

const draaiKnop = document.querySelector("#draaiKnop");
const rechtKnop = document.querySelector("#rechtKnop");
if (draaiKnop && rechtKnop) {
  draaiKnop.addEventListener("click", functie2);
  rechtKnop.addEventListener("click", functie3);
}

// box berekening

function boxBerekening(lengte, breedte, hoogte) {
  return lengte * breedte * hoogte;
}

const kleineBox = boxBerekening(3, 4, 3);
const mediumBox = boxBerekening(7, 2, 3);
const groteBox = boxBerekening(8, 3, 2);

// box berekening

// Telt de nieuws koppen en word getoont middels een knop.


function telkoppen() {
  const koppen = document.querySelectorAll("main h2");
  document.querySelector(".aantal").textContent = "Aantal nieuwsberichten: " + koppen.length;
}

// Telt de nieuws koppen en word getoont middels een knop.


// Verandert de nieuwskoppen in lichtgrijs, alszijnde gelezen na het klikken van een knop.

function wisselOudNieuws() {
  const overigekoppen = document.querySelectorAll("main h2:not(.oudnieuws)");

  overigekoppen.forEach(function (kop) {
    kop.classList.toggle("oudnieuws")
  });
}

// Verandert de nieuwskoppen in lichtgrijs, alszijnde gelezen na het klikken van een knop.

// Dark mode knop, toggled van licht naar darkmode

function darkMode() {
  document.body.classList.toggle("donker")
}
const donkerModus = document.querySelector(".dark-knop");
if (donkerModus) {
  donkerModus.addEventListener("click", darkMode);
}
// Dark mode knop, toggled van licht naar darkmode

// De filterknoppen op de producten pagina,wanneer een class geselecteerd word kijkt de code of 'alles' geselecteerd is, zo niet dan krijgen de niet geselecteerde classes .verborgen toegewezen. Bij "Alles" worden alle verborgen classes weggehaald. 

function filterPagina(categorie) {
  const items = document.querySelectorAll(".kaart");

  items.forEach(function (item) {
    if (categorie === "alles" || item.dataset.categorie === categorie) {
      item.classList.remove("verborgen");
    } else {
      item.classList.add("verborgen");
    }
  });
}

const filterknoppen = document.querySelectorAll(".filter-product");

filterknoppen.forEach(function (knop) {
  knop.addEventListener("click", function () {
    filterPagina(knop.dataset.filter);
  });
});

// De filterknoppen op de producten pagina,wanneer een class geselecteerd word kijkt de code of 'alles' geselecteerd is, zo niet dan krijgen de niet geselecteerde classes .verborgen toegewezen. Bij "Alles" worden alle verborgen classes weggehaald. 

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Goede morgen!";
} else if (time < 20) {
  greeting = "Goede middag!";
} else {
  greeting = "Goede Avond!";
}
const groetingPlek = document.getElementById("groeting");
if (groetingPlek) {
  groetingPlek.innerHTML = greeting;
}

// Kijkt naar tijd van de bezoeker, past hierop een groeting toe.

const buttonA = document.querySelector("#myBtn");
const headingA = document.querySelector("#p_A");

let count = 1;
if (buttonA && headingA) {
  buttonA.onclick = () => {
    buttonA.textContent = "probeer nogmaals!";
    headingA.textContent = `${count} clicks tot zo ver!`;
    count += 1;
    if (count > 25) {
      greeting2 = "Stop maar hoor!";
    }
    else if (count > 20) {
      greeting2 = "Bijna!";
    }
    else {
      (count < 20)
      greeting2 = "Blijf klikken!";
    }
    document.getElementById("stoppen").innerHTML = greeting2;
  };
}

// een clicker met responsive tekst.

if (document.querySelector(".boxBerekening")) {
  boxBerekening(8, 3, 2);
  boxBerekening(5, 4, 3);

}

// alle producten van producten.html in een overzichelijke array
const producten = [
  {
    naam: "SNAVA LF-150",
    categorie: "draagbaar",
    afbeelding: "lf150.png",
    omschrijving: "De lichtste radio in het assortiment, voor verkenners die alles zelf dragen. Bediening is mogelijk met handschoenen aan.",
    specificaties: ["Frequentieband: 3 - 30 MHz (HF)", "Bereik: tot 40 km", "Gewicht: 1,3 kg", "Batterijduur: 16 uur"],
    prijs: 3200
  },
  {
    naam: "SNAVA LF-200",
    categorie: "draagbaar",
    afbeelding: "lf200.png",
    omschrijving: "Draagbare HF-radio voor kleine eenheden te voet. Werkt tot 24 uur op één accu.",
    specificaties: ["Frequentieband: 3 - 30 MHz (HF)", "Bereik: tot 80 km", "Gewicht: 2,1 kg", "Batterijduur: 24 uur"],
    prijs: 4850
  },
  {
    naam: "SNAVA LF-400",
    categorie: "stationair",
    afbeelding: "lf400.png",
    omschrijving: "Basisstation voor een vooruitgeschoven post. Inclusief opvouwbare antennemast van 6 meter.",
    specificaties: ["Frequentieband: 1,6 - 30 MHz (HF)", "Bereik: tot 400 km", "Gewicht: 11,4 kg", "Batterijduur: 72 uur, uitbreidbaar met zonnepaneel"],
    prijs: 12300
  },
  {
    naam: "SNAVA VLF-90",
    categorie: "draagbaar",
    afbeelding: "vlf90.png",
    omschrijving: "Zeer lage frequentie voor communicatie onder de grond, in tunnels en in bunkers.",
    specificaties: ["Frequentieband: 20 - 150 kHz (VLF)", "Bereik: tot 15 km, ook door rots en beton", "Gewicht: 3,8 kg", "Batterijduur: 18 uur"],
    prijs: 9750
  },
  {
    naam: "SNAVA LF-600",
    categorie: "voertuig",
    afbeelding: "lf600.png",
    omschrijving: "Voertuiggebonden systeem met automatische antenneafstemming tijdens het rijden.",
    specificaties: ["Frequentieband: 1,6 - 30 MHz (HF)", "Bereik: tot 600 km", "Gewicht: 18,2 kg", "Voeding: 24 V voertuignet"],
    prijs: 21900
  },
  {
    naam: "SNAVA MESH-1",
    categorie: "stationair",
    afbeelding: "mesh1.png",
    omschrijving: "Onbemand relaisstation dat een eigen netwerk opzet tussen alle SNAVA-systemen in de omgeving.",
    specificaties: ["Frequentieband: 3 - 30 MHz (HF)", "Bereik: tot 250 km per knooppunt", "Gewicht: 6,7 kg", "Batterijduur: 30 dagen op zonne-energie"],
    prijs: 16400
  }
]

// functie om de array om te zetten in daadwerkelijke tekst op de pagina
function maakProductKaart(product) {
  const kaart = document.createElement("article");
  kaart.className = "kaart";
  kaart.dataset.categorie = product.categorie;

  const foto = document.createElement("img");
  foto.className = "product-foto";
  foto.src = "../design/images/" + product.afbeelding;
  foto.alt = "Foto van " + product.naam;
  kaart.appendChild(foto);

  const titel = document.createElement("h2");
  titel.textContent = product.naam;
  kaart.appendChild(titel);

  const omschrijving = document.createElement("p");
  omschrijving.textContent = product.omschrijving;
  kaart.appendChild(omschrijving);

  const lijst = document.createElement("ul");
  product.specificaties.forEach(function (specificaties) {
    const regel = document.createElement("li");
    regel.textContent = specificaties;
    lijst.appendChild(regel);
  });
  kaart.appendChild(lijst);

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



// hieronder de oefening om een van een array gemakkelijk een product te tonen, zodat je makkelijk er een aan kan toe voegen. 
const oefenRadios = [
  { naam: "Scout", bereik: "40 km" },
  { naam: "Ranger", bereik: "80 km" },
  { naam: "Outpost", bereik: "400 km" }
];

function maakOefenKaart(radio) {
  const kaart = document.createElement("div");

  const titel = document.createElement("h3");
  titel.textContent = radio.naam;
  kaart.appendChild(titel);

  const tekst = document.createElement("p");
  tekst.textContent = "Bereik: " + radio.bereik;
  kaart.appendChild(tekst);

  return kaart;
}

const oefenPlek = document.querySelector("#oefenkaarten");

if (oefenPlek) {

  oefenRadios.forEach(function (radio) {
    oefenPlek.appendChild(maakOefenKaart(radio));
  });
}

// einde oefening array

// oefening fetch api 1


async function fetchData() {

  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase().trim();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

  }

  catch (error) {
    console.error("Fout bij het ophalen van de gegevens:", error);
  }
}

const pokemonKnop = document.querySelector("#pokemonKnop");
if (pokemonKnop) {
  pokemonKnop.addEventListener("click", fetchData);
}



// fetch oefening 2

function maakPostkaart(post) {
  const kaart = document.createElement("article");

  const titel = document.createElement("h3");
  titel.textContent = post.title;
  kaart.appendChild(titel);

  const tekst = document.createElement("p");
  tekst.textContent = post.body;
  kaart.appendChild(tekst);

  return kaart;
}

const postPlek = document.querySelector("#posts");
const postStatus = document.querySelector("#postsStatus");
const postKnop = document.querySelector("#postsKnop");

async function haalPostOp() {

  postStatus.textContent = "Posts worden geladen...";
  postKnop.disabled = true;

  postPlek.replaceChildren();

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if (!response.ok) {
      throw new Error(`Request mislukt: ${response.status}`);

    }

    const posts = await response.json();

    if (posts.length === 0) {
      postStatus.textContent = "Geen post is gevonden.";
      return;
    }

    posts.forEach(function (post) {
      postPlek.appendChild(maakPostkaart(post));


    });

    postStatus.textContent = posts.length + " posts geladen.";


  }
  catch (error) {
    postStatus.textContent = "De posts konden niet worden geladen. Probeer het later opnieuw.";
    console.error("Fout bij het ophalen van de post:", error);
  }

  finally {
    postKnop.disabled = false;
  }

}


if (postPlek) {
  haalPostOp();
  postKnop.addEventListener("click", haalPostOp);
}

//Einde fetch oefening 2  