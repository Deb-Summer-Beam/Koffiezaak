// Issue #56 - Centrale productgegevens uit JSON
let menuProducten = [];
// Issue #56 - Voorkomen dat automatisch geladen producten dubbel worden opgeslagen
let winkelwagenWordtGeladen = false;//de klant voegt zelf de product toe
const prijzen = {                   //met true Js.laadt automatisch vanuit sessionStorage de producten in
    espresso: 2.50,
    americano: 3.00,
    cappuccino: 3.50,
    latte: 3.75,
    flatwhite: 3.75,
    ijskoffie: 3.75,

    zwartethee: 2.50,
    groenethee: 3.00,
    muntthee: 3.50,
    kamillethee: 3.50,
    chailatte: 3.75,
    vruchtenthee: 3.75,

    appeltaart: 4.00,
    cheesecake: 5.00,
    chocoladetaart: 5.00,
    muffin: 4.00,
    croissant: 2.75,
    koekjes: 3.00,
    gebakjes: 3.75
};
function berekenTotaal(prijs, aantal) {
    return prijs * aantal;
}
// Issue #56 - Productgegevens ophalen uit de centrale JSON
async function haalMenuProductenOp() {
    try {
        const response = await fetch("json/menu-groep.json");

        if (!response.ok) {
            throw new Error("Producten laden mislukt: " + response.status);
        }

        const producten = await response.json();

        console.log("Producten uit JSON geladen:", producten.length);

        return producten;

    } catch (error) {
        console.error("Fout bij ophalen producten:", error);
        return null;
    }
}
haalMenuProductenOp().then(function (producten) {
    if (producten) {
        menuProducten = producten;
        console.log("Centrale productlijst beschikbaar:", menuProducten.length);

        vulProductKeuzelijst(menuProducten);

        voegOpgeslagenProductenToe();

        // Issue #56 - Opgeslagen producten controleren
const opgeslagenWinkelwagen = haalOpgeslagenWinkelwagenOp();

opgeslagenWinkelwagen.forEach(function (item) {
    const gevondenProduct = menuProducten.find(function (menuItem) {
        return menuItem.naam === item.naam;
    });

    console.log("Winkelwagenproduct gecontroleerd:", {
        naam: item.naam,
        aantal: item.aantal,
        gevonden: Boolean(gevondenProduct),
        prijs: gevondenProduct ? gevondenProduct.prijs : null
    });
});
    }
});

// Issue #56 - Opgeslagen winkelwagen ophalen
function haalOpgeslagenWinkelwagenOp() {
    const winkelwagen = JSON.parse(
        sessionStorage.getItem("winkelwagen") || "[]"
    );

    console.log("Opgeslagen winkelwagen:", winkelwagen);

    return winkelwagen;
}

const product = document.getElementById("product");
const aantal = document.getElementById("aantal");
// Issue #56 - Productkeuzelijst vanuit JSON vullen
function vulProductKeuzelijst(producten) {
    console.log("Keuzelijst voorbereiden voor:", producten.length, "producten");

    product.textContent = "";

    // Standaardoptie toevoegen
    const standaardOptie = document.createElement("option");
    standaardOptie.value = "";
    standaardOptie.textContent = "-- Kies een product --";
    product.appendChild(standaardOptie);

    // Producten uit de JSON toevoegen
    producten.forEach(function (item) {
        const optie = document.createElement("option");

        optie.value = item.naam;
        optie.textContent =
            item.naam + " - " +
            item.prijs.toLocaleString("nl-NL", {
                style: "currency",
                currency: "EUR"
            });

        product.appendChild(optie);
    });
}

const toevoegenBtn = document.getElementById("toevoegenBtn");
const winkelmandje = document.getElementById("winkelmandje");
const totaalBestelling = document.getElementById("totaalBestelling");

let winkelmandTotaal = 0;
// Issue #56 - Product ontvangen vanuit de menukaart
const gekozenProductUitMenu = sessionStorage.getItem("gekozenProduct");

console.log("Gekozen product uit menukaart:", gekozenProductUitMenu);
toevoegenBtn.addEventListener("click", () => {

    const gekozenProduct = product.value;
    const gekozenAantal = Number(aantal.value);


    if (gekozenProduct === "") {
    alert("Kies eerst een product.");
    return;
    }
    if (!Number.isInteger(gekozenAantal) || gekozenAantal < 1) {
    alert("Kies een geldig heel aantal vanaf 1.");
    return;
    }

    const gekozenItem = menuProducten.find(function (item) {
    return item.naam === gekozenProduct;
});

if (!gekozenItem) {
    alert("Dit product is niet gevonden in de menukaart.");
    return;
}
// Issue #56 - Alleen handmatig toegevoegde producten opslaan
if (!winkelwagenWordtGeladen) {
    const opgeslagenWinkelwagen = haalOpgeslagenWinkelwagenOp();

    const bestaandProduct = opgeslagenWinkelwagen.find(function (item) {
        return item.naam === gekozenProduct;
    });

    if (bestaandProduct) {
        bestaandProduct.aantal += gekozenAantal;
    } else {
        opgeslagenWinkelwagen.push({
            naam: gekozenProduct,
            aantal: gekozenAantal
        });
    }

    sessionStorage.setItem(
        "winkelwagen",
        JSON.stringify(opgeslagenWinkelwagen)
    );
}
const prijs = gekozenItem.prijs;
    const totaal = berekenTotaal(prijs, gekozenAantal);

    const regel = document.createElement("li");

    const regelSpan = document.createElement("span");

    regelSpan.textContent =
    gekozenAantal + " x " +
    gekozenProduct +
    " - €" +
    totaal.toFixed(2);

    regelSpan.classList.add("regelSpan");

    regel.appendChild(regelSpan);

    const verwijderBtn = document.createElement("button");
    verwijderBtn.type = "button";

    verwijderBtn.textContent = "❌ Verwijderen";
    verwijderBtn.classList.add("verwijderBtn");

    verwijderBtn.addEventListener("click", () => {

    regel.remove();
    // Issue #56 - Product ook verwijderen uit sessionStorage
    const opgeslagenWinkelwagen = haalOpgeslagenWinkelwagenOp();

const bestaandProduct = opgeslagenWinkelwagen.find(function (item) {
    return item.naam === gekozenProduct;
});

if (bestaandProduct) {
    bestaandProduct.aantal -= gekozenAantal;
}

const bijgewerkteWinkelwagen = opgeslagenWinkelwagen.filter(function (item) {
    return item.aantal > 0;
});

sessionStorage.setItem(
    "winkelwagen",
    JSON.stringify(bijgewerkteWinkelwagen)
);
    winkelmandTotaal = winkelmandTotaal - totaal;

        totaalBestelling.textContent =
            "Totaal bestelling: €" + winkelmandTotaal.toFixed(2);

});
    regel.appendChild(verwijderBtn);

    winkelmandje.appendChild(regel);//voeg nieuwe regel-node toe als kind van de winkelmandje-node

    winkelmandTotaal = winkelmandTotaal + totaal;

    totaalBestelling.textContent =
        "Totaal bestelling: €" + winkelmandTotaal.toFixed(2);
});
// Toon een veldgerichte foutmelding
function toonVeldFout(veldId, melding) {
    const veld = document.getElementById(veldId);
    const fout = document.getElementById(veldId + "-fout");

    fout.textContent = melding;
    veld.setAttribute("aria-invalid", "true");
    veld.focus();

    return false;
}
// Verwijder eerdere foutmeldingen van alle klantgegevensvelden
function wisVeldFouten() {
    const velden = [
        "naam",
        "email",
        "telefoon",
        "adres",
        "postcode",
        "plaats"
    ];

    velden.forEach((veldId) => {
        document.getElementById(veldId + "-fout").textContent = "";
        document.getElementById(veldId).removeAttribute("aria-invalid");
    });
}
// Centrale validatie voor beide bestelknoppen
function valideerKlantgegevens() {
    wisVeldFouten();

    const naam = document.getElementById("naam").value.trim();
    const emailVeld = document.getElementById("email");
    const telefoon = document.getElementById("telefoon").value.trim();
    const adres = document.getElementById("adres").value.trim();
    const postcode = document.getElementById("postcode").value.trim();
    const plaats = document.getElementById("plaats").value.trim();

    // Naam controleren
    if (naam.length < 2) {
        return toonVeldFout("naam",
            "Vul een naam in met minimaal 2 tekens.");
    }

    // E-mailadres controleren
    if (!emailVeld.validity.valid) {
        return toonVeldFout("email",
            "Vul een geldig e-mailadres in.");
    }

    // Telefoonnummer controleren
    if (telefoon === "") {
        return toonVeldFout("telefoon",
            "Vul je telefoonnummer in.");
    }

    if (!/^[0-9+\s()-]+$/.test(telefoon)) {
        return toonVeldFout("telefoon",
            "Gebruik alleen cijfers en toegestane telefoontekens.");
    }

    const telefoonCijfers = telefoon.replace(/\D/g, "");

    if (telefoonCijfers.length < 10 || telefoonCijfers.length > 15) {
        return toonVeldFout("telefoon",
            "Vul een telefoonnummer in met 10 tot 15 cijfers.");
    }

    // Adres controleren
    const adresPatroon = /^(?=.{5,}$)(?=.*[a-zA-ZÀ-ÿ]{3,})(?=.*\d)[a-zA-ZÀ-ÿ0-9\s.'-]+$/;

    if (!adresPatroon.test(adres)) {
        return toonVeldFout("adres",
            "Vul een geldig adres in, bijvoorbeeld Kerkstraat 12.");
    }

    // Postcode controleren
    const postcodePatroon = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;

    if (!postcodePatroon.test(postcode)) {
        return toonVeldFout("postcode",
            "Vul een geldige postcode in, bijvoorbeeld 4811AB.");
    }

    // Plaatsnaam controleren
    const plaatsPatroon = /^[a-zA-ZÀ-ÿ]{2,}(?:[\s'-]+[a-zA-ZÀ-ÿ]{2,})*$/;

    if (!plaatsPatroon.test(plaats)) {
        return toonVeldFout("plaats",
            "Vul een geldige plaatsnaam in, bijvoorbeeld Breda of Den Haag.");
    }

    return true;
}
const controleerBtn = document.getElementById("controleerBtn");
const controleOverzicht = document.getElementById("controleOverzicht");

// Postcodefoutmelding wissen zodra de postcode geldig is
const postcodeInput = document.getElementById("postcode");
const postcodeFoutmelding = document.getElementById("postcode-fout");
const postcodeRegex = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;

postcodeInput.addEventListener("input", () => {
    if (postcodeRegex.test(postcodeInput.value.trim())) {
        postcodeFoutmelding.textContent = "";
        postcodeInput.removeAttribute("aria-invalid");
    }
});

controleerBtn.addEventListener("click", () => {

    if (winkelmandTotaal === 0) {
    alert("Voeg eerst een product toe aan je bestelling.");
    return;//test eerst als het een lege winkelwagen is
    }    
   // Gebruik de centrale validatiefunctie
if (!valideerKlantgegevens()) {
    return;
}

    const naam = document.getElementById("naam").value;
    const email = document.getElementById("email").value;
    const telefoon = document.getElementById("telefoon").value;
    const adres = document.getElementById("adres").value;
    const postcode = document.getElementById("postcode").value;
    const plaats = document.getElementById("plaats").value;

    const producten = winkelmandje.querySelectorAll("li");//alle <li>'s  uit winkelmaandje verzameld

    function productRegels(product) {
    const productRegel = document.createElement("p");
    productRegel.textContent =
        product.querySelector(".regelSpan").textContent;
    controleOverzicht.appendChild(productRegel);
}

// Controleoverzicht veilig opbouwen
function appendControleOverzicht() {
    controleOverzicht.textContent = "";

    const titel = document.createElement("h3");
    titel.textContent = "👤 Controleer je gegevens";

    const naamE = document.createElement("p");
    naamE.textContent = `Naam: ${naam}`;

    const emailE = document.createElement("p");
    emailE.textContent = `E-mail: ${email}`;

    const telefoonE = document.createElement("p");
    telefoonE.textContent = `Telefoon: ${telefoon}`;

    const adresE = document.createElement("p");
    adresE.textContent = `Adres: ${adres}`;

    const postcodeE = document.createElement("p");
    postcodeE.textContent = `Postcode: ${postcode}`;

    const plaatsE = document.createElement("p");
    plaatsE.textContent = `Plaats: ${plaats}`;

    const bestellingE = document.createElement("h3");
    bestellingE.textContent = "🛒 Jouw bestelling";

    const totaalE = document.createElement("p");
    totaalE.textContent =
        `Totaal bestelling: €${winkelmandTotaal.toFixed(2)}`;

    controleOverzicht.appendChild(titel);
    controleOverzicht.appendChild(naamE);
    controleOverzicht.appendChild(emailE);
    controleOverzicht.appendChild(telefoonE);
    controleOverzicht.appendChild(adresE);
    controleOverzicht.appendChild(postcodeE);
    controleOverzicht.appendChild(plaatsE);
    controleOverzicht.appendChild(bestellingE);

    producten.forEach(productRegels);

    controleOverzicht.appendChild(totaalE);
}

appendControleOverzicht();

});
//hier voorkomen we dat bij het submitten de pagina opnieuw laadt
const bestelFormulier = document.getElementById("bestelFormulier");

bestelFormulier.addEventListener("submit", (event) => {

    event.preventDefault();//deze voorkomt dat de pagina opnieuw verzend of herlaadt
                            // hier neemt javascript over

    if (winkelmandTotaal === 0) {
        alert("Voeg eerst een product toe aan je bestelling.");
        return;//als de winkelwagen nog 0 is,de functie stopt hier
    }
// Gebruik de centrale validatiefunctie
if (!valideerKlantgegevens()) {
    return;
}

    alert("☕ Bedankt voor je bestelling!");//anders krijgt dit

    bestelFormulier.reset();// verwijder de klantgegevens voor de volgende klant
    // Issue #56 - Opgeslagen winkelwagen leegmaken na succesvolle bestelling
    sessionStorage.removeItem("winkelwagen");

    winkelmandje.textContent = "";//leegt winkelwagen
    winkelmandTotaal = 0;
    totaalBestelling.textContent = "Totaal bestelling: €0.00";//leegt totaal bestellingen
   controleOverzicht.textContent = "";//controleoverzicht leegmaken




});
// Issue #56 - Automatisch inladen van meerdere winkelwagenproducten volgt
// Issue #56 - Opgeslagen producten toevoegen aan bestelling
function voegOpgeslagenProductenToe() {
    const opgeslagenWinkelwagen = haalOpgeslagenWinkelwagenOp();
    // Issue #56 - Automatisch inladen gestart
    winkelwagenWordtGeladen = true;

    opgeslagenWinkelwagen.forEach(function (item) {
        const gevondenProduct = menuProducten.find(function (menuItem) {
            return menuItem.naam === item.naam;
        });

        if (!gevondenProduct) {
            console.warn("Product niet gevonden:", item.naam);
            return;
        }

        product.value = gevondenProduct.naam;
        aantal.value = item.aantal;

        toevoegenBtn.click();
    });
    // Issue #56 - Automatisch inladen afgerond
    winkelwagenWordtGeladen = false;
}
