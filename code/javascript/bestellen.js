
const prijzen = {
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

const product = document.getElementById("product");
const aantal = document.getElementById("aantal");

const toevoegenBtn = document.getElementById("toevoegenBtn");
const winkelmandje = document.getElementById("winkelmandje");
const totaalBestelling = document.getElementById("totaalBestelling");

let winkelmandTotaal = 0;

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

    const prijs = prijzen[gekozenProduct];
    const totaal = berekenTotaal(prijs, gekozenAantal);
    
    const regel = document.createElement("li");
    const regelSpan = document.createElement('span');
    regel.appendChild(regelSpan);

    regelSpan.textContent =
        gekozenAantal + " x " +
        gekozenProduct +
        " - €" +
        totaal.toFixed(2);
    
    regelSpan.classList.add('regelSpan');

    const verwijderBtn = document.createElement("button");
    verwijderBtn.type = "button";
    
    verwijderBtn.textContent = "❌ Verwijderen";
    verwijderBtn.classList.add("verwijderBtn");

    verwijderBtn.addEventListener("click", () => {

    regel.remove();
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
        const productRegel = document.createElement('p');
        productRegel.textContent = product.querySelector('.regelSpan').textContent;
        controleOverzicht.appendChild(productRegel);
    }

    // Creëer alle elementen en geef ze met textContent text
    function appendControleOverzicht() {
        controleOverzicht.textContent = "";

        const titel = document.createElement('h3');
        titel.textContent = '👤 Controleer je gegevens';

        const naamE = document.createElement('p');
        naamE.textContent = `Naam: ${naam} `;

        const emailE = document.createElement('p');
        emailE.textContent = `E-mail: ${email} `;

        const telefoonE = document.createElement('p');
        telefoonE.textContent = `Telefoon: ${telefoon} `;

        const adresE = document.createElement('p');
        adresE.textContent = `Adres: ${adres} `;

        const postcodeE = document.createElement('p');
        postcodeE.textContent = `Postcode: ${postcode} `;

        const plaatsE = document.createElement('p');
        plaatsE.textContent = `Plaats: ${plaats} `;

        const bestellingE = document.createElement('h3');
        bestellingE.textContent = '🛒 Jouw bestelling';

        const totaalE = document.createElement('p');
        totaalE.textContent = `Totaal bestelling: €${winkelmandTotaal.toFixed(2)}`;

        // Voeg alle gecreëerde elementen toe aan #controleOverzicht
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
//hier voorkomen we dat bj het submitten de pagina opnieuw laadt
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

    winkelmandje.textContent = "";//leegt winkelwagen
    winkelmandTotaal = 0;
    totaalBestelling.textContent = "Totaal bestelling: €0.00";//leegt totaal bestellingen
    controleOverzicht.textContent = "";//controleoverzicht leegmaken
    
});