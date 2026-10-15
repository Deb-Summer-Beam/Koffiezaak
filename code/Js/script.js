// Rotate the coffee image
const afbeelding = document.querySelector(".draai-afbeelding");

if (afbeelding) {
  afbeelding.addEventListener("click", function () {
    afbeelding.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(360deg)" }
      ],
      {
        duration: 1000,
        iterations: 1
      }
    );
  });
}


// Hide or show the drinks and pastries lists
const menuKnoppen = document.querySelectorAll(".menu-knop");

menuKnoppen.forEach(function (menuKnop) {
  const lijstId = menuKnop.getAttribute("aria-controls");
  const lijst = document.getElementById(lijstId);

  if (lijst) {
    menuKnop.addEventListener("click", function () {
      lijst.hidden = !lijst.hidden;

      menuKnop.setAttribute(
        "aria-expanded",
        String(!lijst.hidden)
      );
    });
  }
});


// Zet de afbeelding ondersteboven of rechtop door een CSS-class te wisselen.
const omdraaiKnop = document.getElementById("omdraai-knop");
const overigAfbeelding = document.getElementById("overig-afbeelding");

if (omdraaiKnop && overigAfbeelding) {
  omdraaiKnop.addEventListener("click", function () {
    const ondersteboven = overigAfbeelding.classList.toggle("ondersteboven");

    omdraaiKnop.setAttribute("aria-pressed", String(ondersteboven));
    omdraaiKnop.textContent = ondersteboven
      ? "Zet rechtop"
      : "Zet ondersteboven";
  });
}


// Bereken de inhoud met drie waarden die aan de functie worden meegegeven.
function berekenInhoud(lengte, breedte, hoogte) {
  return lengte * breedte * hoogte;
}

const balkUitkomst = document.getElementById("balk-uitkomst");

// Toon de berekening alleen op de pagina waar het resultaat-element bestaat.
if (balkUitkomst) {
  const inhoud = berekenInhoud(8, 3, 2);
  balkUitkomst.textContent = inhoud;
}


// Selecteer alle h2-koppen op de huidige pagina.
const koppen = document.querySelectorAll("h2");

// Bewaar de koppen die bij het laden nog geen accent hebben.
// Deze selectie blijft hetzelfde wanneer de classes later veranderen.
const overigeKoppen = document.querySelectorAll("h2:not(.accent)");
const telKoppenKnop = document.getElementById("tel-koppen-knop");
const accentKnop = document.getElementById("accent-knop");
const koppenUitkomst = document.getElementById("koppen-uitkomst");

// Doorloop iedere gevonden kop en verhoog de teller met 1.
function telKoppen() {
  let aantal = 0;

  koppen.forEach(function (kop) {
    aantal = aantal + 1;
  });

  koppenUitkomst.textContent = "Aantal h2-koppen op deze pagina: " + aantal;
}

// Wissel alleen het accent van de overige koppen.
// De twee koppen met accent in HTML behouden hun class.
function wisselAccent() {
  overigeKoppen.forEach(function (kop) {
    kop.classList.toggle("accent");
  });

  const accentActief = accentKnop.getAttribute("aria-pressed") === "false";
  accentKnop.setAttribute("aria-pressed", String(accentActief));
  accentKnop.textContent = accentActief
    ? "Accent verwijderen van overige koppen"
    : "Accent toevoegen aan overige koppen";
}

// Deze knoppen bestaan alleen op Overig.
if (telKoppenKnop && accentKnop && koppenUitkomst) {
  telKoppenKnop.addEventListener("click", telKoppen);
  accentKnop.addEventListener("click", wisselAccent);
}


// Twee getalvariabelen voor het prijsvoorbeeld.
const prijsPerCappuccino = 3.50;
const aantalCappuccinos = 2;

// Twee parameters: de functie geeft hun product terug.
function berekenTotaalprijs(prijs, aantal) {
  return prijs * aantal;
}

// Tijdelijke Console-tests: haal de // weg om ze zelf te proberen.
// console.log(berekenTotaalprijs(3.50, 2)); // 7
// console.log(berekenTotaalprijs(3.50, 3)); // 10.5
// console.log(berekenTotaalprijs(2, 4));    // 8

const prijsVoorbeeld = document.getElementById("prijs-voorbeeld");
if (prijsVoorbeeld) {
  const voorbeeldTotaal = berekenTotaalprijs(prijsPerCappuccino, aantalCappuccinos);
  prijsVoorbeeld.textContent = "Voorbeeld: " + aantalCappuccinos + " cappuccino's kosten samen € "
    + voorbeeldTotaal.toFixed(2).replace(".", ",") + ".";
}

// Selecteer de invoer, de knop en de melding één keer.
const aantalInvoer = document.getElementById("aantal-invoer");
const berekenPrijsKnop = document.getElementById("bereken-prijs-knop");
const prijsMelding = document.getElementById("prijs-melding");

function controleerAantal() {
  const invoer = aantalInvoer.value.trim();
  const ingevoerdAantal = Number(invoer);

  if (invoer === "") {
    prijsMelding.textContent = "Vul een aantal in.";
  } else if (!Number.isSafeInteger(ingevoerdAantal) || ingevoerdAantal <= 0) {
    prijsMelding.textContent = "Voer een geldig positief geheel getal in, bijvoorbeeld 2.";
  } else {
    const totaalprijs = berekenTotaalprijs(prijsPerCappuccino, ingevoerdAantal);
    prijsMelding.textContent = "Aantal: " + ingevoerdAantal + ". Totaalprijs: € "
      + totaalprijs.toFixed(2).replace(".", ",") + ".";
  }
}

// De functie wordt bij elke klik opnieuw uitgevoerd. Geen onclick in HTML.
if (aantalInvoer && berekenPrijsKnop && prijsMelding) {
  berekenPrijsKnop.addEventListener("click", controleerAantal);
}


// Pagina5.html - Stap 1: selecteer de lege container en bewaar het element.
const kaartLijst = document.getElementById("kaart-lijst");

// Stap 2: een array met drie objecten met dezelfde propertynamen.
const onderdelen = [
  {
    titel: "Espresso",
    beschrijving: "Een kleine, krachtige koffie met een volle smaak.",
    extra: "Prijs: € 2,50"
  },
  {
    titel: "Cappuccino",
    beschrijving: "Espresso met warme melk en een zachte laag melkschuim.",
    extra: "Prijs: € 3,50"
  },
  {
    titel: "Latte macchiato",
    beschrijving: "Warme melk met espresso en een luchtige laag melkschuim.",
    extra: "Prijs: € 3,75"
  }
];

// Stap 3: ontvang één object en geef een compleet article terug.
function maakKaart(onderdeel) {
  const kaart = document.createElement("article");
  kaart.classList.add("product-kaart");

  const kop = document.createElement("h2");
  kop.textContent = onderdeel.titel;

  const beschrijving = document.createElement("p");
  beschrijving.textContent = onderdeel.beschrijving;

  const extra = document.createElement("p");
  extra.classList.add("product-extra");
  extra.textContent = onderdeel.extra;

  kaart.appendChild(kop);
  kaart.appendChild(beschrijving);
  kaart.appendChild(extra);

  return kaart;
}

// Stap 4: bouw voor ieder object een kaart en voeg die aan de container toe.
// De controle voorkomt fouten op pagina's zonder kaart-lijst.
if (kaartLijst) {
  onderdelen.forEach(function (onderdeel) {
    const kaart = maakKaart(onderdeel);
    kaartLijst.appendChild(kaart);
  });
}
