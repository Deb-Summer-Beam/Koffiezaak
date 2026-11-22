
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
    let totaal = berekenTotaal(prijs, gekozenAantal);
    
    const regel = document.createElement("li");
    const regelSpan = document.createElement('span');
    regel.appendChild(regelSpan);

    regelSpan.textContent =
        gekozenAantal + " x " +
        gekozenProduct +
        " - €" +
        totaal.toFixed(2);
    
    regelSpan.classList.add('regelSpan');
    // Invoerveld om het aantal in de winkelwagen aan te passen
    const aantalInput = document.createElement("input");
    aantalInput.type = "number";
    aantalInput.min = "1";
    aantalInput.step = "1";
    aantalInput.value = gekozenAantal;
    aantalInput.classList.add("winkelmandAantal");
    aantalInput.setAttribute("aria-label", "Aantal " + gekozenProduct);

    regel.appendChild(aantalInput);
    aantalInput.addEventListener("change", () => {
    const nieuwAantal = Number(aantalInput.value);

    if (!Number.isInteger(nieuwAantal) || nieuwAantal < 1) {
        alert("Kies een geldig heel aantal vanaf 1.");
        aantalInput.value = totaal / prijs;
        return;
    }

    const nieuwTotaal = berekenTotaal(prijs, nieuwAantal);

    winkelmandTotaal = winkelmandTotaal - totaal + nieuwTotaal;
    totaal = nieuwTotaal;

    regelSpan.textContent =
        nieuwAantal + " x " + gekozenProduct +
        " - €" + totaal.toFixed(2);

    totaalBestelling.textContent =
        "Totaal bestelling: €" + winkelmandTotaal.toFixed(2);

    controleOverzicht.textContent = "";
});


    const verwijderBtn = document.createElement("button");
    verwijderBtn.type = "button";
    
    verwijderBtn.textContent = "❌ Verwijderen";
    verwijderBtn.classList.add("verwijderBtn");

    verwijderBtn.addEventListener("click", () => {

    regel.remove();
    winkelmandTotaal = winkelmandTotaal - totaal;

    totaalBestelling.textContent =
        "Totaal bestelling: €" + winkelmandTotaal.toFixed(2);

    controleOverzicht.textContent = "";

});
    regel.appendChild(verwijderBtn);


    winkelmandje.appendChild(regel);//voeg nieuwe regel-node toe als kind van de winkelmandje-node

    winkelmandTotaal = winkelmandTotaal + totaal;

    totaalBestelling.textContent =
        "Totaal bestelling: €" + winkelmandTotaal.toFixed(2);
});
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
   

    const naam = document.getElementById("naam").value;
    const email = document.getElementById("email").value;
    const telefoon = document.getElementById("telefoon").value;
    const adres = document.getElementById("adres").value;

    const adresPatroon = /^(?=.{5,}$)(?=.*[a-zA-ZÀ-ÿ]{3,})(?=.*\d)[a-zA-ZÀ-ÿ0-9\s.'-]+$/;

    if (!adresPatroon.test(adres.trim())) {
    alert("Vul een geldig adres in, bijvoorbeeld Kerkstraat 12.");
    return;
}
    const postcode = document.getElementById("postcode").value;
    const plaats = document.getElementById("plaats").value;
    const plaatsPatroon = /^[a-zA-ZÀ-ÿ]{2,}(?:[\s'-]+[a-zA-ZÀ-ÿ]{2,})*$/;

    if (!plaatsPatroon.test(plaats.trim())) {
    alert("Vul een geldige plaatsnaam in, bijvoorbeeld Breda of Den Haag.");
    return;
}
    const telefoonVeld = document.getElementById("telefoon");
    const telefoonFout = document.getElementById("telefoon-fout");

    telefoonFout.textContent = "";
    telefoonVeld.removeAttribute("aria-invalid");

    if (telefoon.trim() === "") {
    telefoonFout.textContent = "Vul je telefoonnummer in.";
    telefoonVeld.setAttribute("aria-invalid", "true");
    telefoonVeld.focus();
    return;
}

    // Controleer of het telefoonnummer geldige tekens bevat
    if (!/^[0-9+\s()-]+$/.test(telefoon.trim())) {
    telefoonFout.textContent =
        "Gebruik alleen cijfers en toegestane telefoontekens.";
    telefoonVeld.setAttribute("aria-invalid", "true");
    telefoonVeld.focus();
    return;
}

    // Controleer of het telefoonnummer voldoende cijfers bevat
    const telefoonCijfers = telefoon.replace(/\D/g, "");

    if (telefoonCijfers.length < 10 || telefoonCijfers.length > 15) {
    telefoonFout.textContent =
        "Vul een telefoonnummer in met minimaal 10 tot 15 cijfers.";
    telefoonVeld.setAttribute("aria-invalid", "true");
    telefoonVeld.focus();
    return;
}
    // Controleer of de naam minimaal 2 tekens bevat
    const naamVeld = document.getElementById("naam");
    const naamFout = document.getElementById("naam-fout");

    // Verwijder een eventuele vorige foutmelding
    naamFout.textContent = "";
    naamVeld.removeAttribute("aria-invalid");

    if (naam.trim().length < 2) {
    naamFout.textContent = "Vul een naam in met minimaal 2 tekens.";
    naamVeld.setAttribute("aria-invalid", "true");
    naamVeld.focus();
    return;
}
    // Controleer of het e-mailadres geldig is
    const emailVeld = document.getElementById("email");
    const emailFout = document.getElementById("email-fout");

    // Verwijder een eventuele vorige foutmelding
    emailFout.textContent = "";
    emailVeld.removeAttribute("aria-invalid");

    if (!emailVeld.validity.valid) {
    emailFout.textContent = "Vul een geldig e-mailadres in.";
    emailVeld.setAttribute("aria-invalid", "true");
    emailVeld.focus();
    return;
}
    // Controleer het Nederlandse postcodeformaat
    const postcodePatroon = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;// mag geen 0 zijn, daarna 3 cijfers volgen, mag een spatie bevatten, mag hoofdletters of kleine letters bevatten en 2 letters bevatten

    const postcodeVeld = document.getElementById("postcode");
    const postcodeFout = document.getElementById("postcode-fout");

    // Verwijder de vorige foutmelding
    postcodeFout.textContent = "";
    postcodeVeld.removeAttribute("aria-invalid");

    if (!postcodePatroon.test(postcode.trim())) {
    postcodeFout.textContent =
        "Vul een geldige postcode in, bijvoorbeeld 4811AB.";

    postcodeVeld.setAttribute("aria-invalid", "true");
    postcodeVeld.focus();
    return;

}  

   if (
    naam.trim() === "" ||
    email.trim() === "" ||
    telefoon.trim() === "" ||
    adres.trim() === "" ||
    postcode.trim() === "" ||
    plaats.trim() === ""
) {


    alert("Vul eerst alle klantgegevens in.");
    return;//alert geven als een van de gegevens ontbreekt
}

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
        titel.textContent = 'Controleer je gegevens';

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
        bestellingE.textContent = 'Jouw bestelling';

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



    const naam = document.getElementById("naam").value;
const email = document.getElementById("email").value;
const telefoon = document.getElementById("telefoon").value;
const adres = document.getElementById("adres").value;
const postcode = document.getElementById("postcode").value;
const plaats = document.getElementById("plaats").value;

const adresPatroon = /^(?=.{5,}$)(?=.*[a-zA-ZÀ-ÿ]{3,})(?=.*\d)[a-zA-ZÀ-ÿ0-9\s.'-]+$/;

if (!adresPatroon.test(adres.trim())) {
    alert("Vul een geldig adres in, bijvoorbeeld Kerkstraat 12.");
    return;
}

    const postcodePatroon = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;

if (!postcodePatroon.test(postcode.trim())) {
    alert("Vul een geldige postcode in, bijvoorbeeld 4811AB.");
    return;
}

const telefoonCijfers = telefoon.replace(/\D/g, "");//haalt alle tekens weg die geen cijfers zijn

if (
    !/^[0-9+\s()-]+$/.test(telefoon.trim()) ||
    telefoonCijfers.length < 10 ||
    telefoonCijfers.length > 15
) {
    alert("Vul een geldig telefoonnummer in met 10 tot 15 cijfers.");
    return;
}

if (naam.trim().length < 2) {
    alert("Vul een naam in met minimaal 2 tekens.");
    return;
}

const plaatsPatroon = /^[a-zA-ZÀ-ÿ]{2,}(?:[\s'-]+[a-zA-ZÀ-ÿ]{2,})*$/;

if (!plaatsPatroon.test(plaats.trim())) {
    alert("Vul een geldige plaatsnaam in, bijvoorbeeld Breda of Den Haag.");
    return;
}

if (
    naam.trim() === "" ||
    email.trim() === "" ||
    telefoon.trim() === "" ||
    adres.trim() === "" ||
    postcode.trim() === "" ||
    plaats.trim() === ""
) {
    alert("Vul eerst alle klantgegevens in.");
    return;
}

    alert("☕ Bedankt voor je bestelling!");//anders krijgt dit

    
    bestelFormulier.reset();// verwijder de klantgegevens voor de volgende klant

    winkelmandje.textContent = "";//leegt winkelwagen
    winkelmandTotaal = 0;
    totaalBestelling.textContent = "Totaal bestelling: €0.00";//leegt totaal bestellingen
    controleOverzicht.textContent = "";//controleoverzicht leegmaken
    



});