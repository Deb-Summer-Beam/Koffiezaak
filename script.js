
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

    regel.textContent =
        gekozenAantal + " x " +
        gekozenProduct +
        " - €" +
        totaal.toFixed(2);

    const verwijderBtn = document.createElement("button");
    verwijderBtn.type = "button";
    
    verwijderBtn.textContent = "❌ Verwijderen";
    verwijderBtn.classList.add("verwijderBtn");

    verwijderBtn.addEventListener("click", () => {

    regel.remove();
    winkelmandTotaal = winkelmandTotaal - totaal;
    totaalBestelling.textContent ="Totaal bestelling: €" + winkelmandTotaal.toFixed(2);

    bestellingGecontroleerd = false;//de besteling is veranderd en moet opnieuw gecontroleerd worden
    controleOverzicht.replaceChildren();//verdwijnt het oude controleoverzicht automatisch

});
    regel.appendChild(verwijderBtn);

    winkelmandje.appendChild(regel);//voeg nieuwe regel-node toe als kind van de winkelmandje-node

    winkelmandTotaal = winkelmandTotaal + totaal;

    totaalBestelling.textContent =
        "Totaal bestelling: €" + winkelmandTotaal.toFixed(2);

    bestellingGecontroleerd = false;//nadat al gecontroleerd is de klant voegt opnieuw een product, dan wordt de eerdere controle ongeldig
    controleOverzicht.replaceChildren();//verwijdert de inhoud van het oude controleoverzicht, dus de controle moet opnieuw uitgevoerd worden


});
const controleerBtn = document.getElementById("controleerBtn");
const controleOverzicht = document.getElementById("controleOverzicht");

let bestellingGecontroleerd = false;//nee niet gecontroleerd

const klantVelden = document.querySelectorAll(
    "#naam, #email, #telefoon, #adres, #postcode, #plaats"
);

klantVelden.forEach((veld) => {
    veld.addEventListener("input", () => {//wanneer klant typt of iets verandert
        bestellingGecontroleerd = false; //maak eerdere controle ongeldig
        controleOverzicht.replaceChildren(); //verwijdert het oude overzicht
    });
});

function voegTekstToe(element, tekst) {
    const paragraaf = document.createElement(element);
    paragraaf.textContent = tekst;
    controleOverzicht.appendChild(paragraaf);
}

controleerBtn.addEventListener("click", () => {

    if (!bestelFormulier.reportValidity()) {//controleert validatie regels o.a.required en pattern 
        return;
    }

    if (winkelmandTotaal === 0) {
    alert("Voeg eerst een product toe aan je bestelling.");
    return;//test eerst als het een lege winkelwagen is
    }    
   

    const naam = document.getElementById("naam").value;
    const email = document.getElementById("email").value;
    const telefoon = document.getElementById("telefoon").value;
    const adres = document.getElementById("adres").value;
    const postcode = document.getElementById("postcode").value;
    const plaats = document.getElementById("plaats").value;

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


controleOverzicht.replaceChildren();//maak eerst oude controleoverzicht leeg

voegTekstToe("h3", "👤 Controleer je gegevens");

voegTekstToe("p", "Naam: " + naam);//maak veilige HTML-element aan
voegTekstToe("p", "E-mail: " + email);
voegTekstToe("p", "Telefoon: " + telefoon);
voegTekstToe("p", "Adres: " + adres);
voegTekstToe("p", "Postcode: " + postcode);
voegTekstToe("p", "Plaats: " + plaats);

voegTekstToe("h3", "🛒 Jouw bestelling");

producten.forEach((product) => {
    const kopie = product.cloneNode(true);
    kopie.querySelector(".verwijderBtn").remove();

    voegTekstToe("p", kopie.textContent);
});

voegTekstToe(
    "p",
    "Totaal bestelling: €" + winkelmandTotaal.toFixed(2)
);

bestellingGecontroleerd = true;

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

    if (bestellingGecontroleerd === false) {
    alert("Controleer eerst je bestelling voordat je bestelt.");
    return;
}

const naam = document.getElementById("naam").value;
const email = document.getElementById("email").value;
const telefoon = document.getElementById("telefoon").value;
const adres = document.getElementById("adres").value;
const postcode = document.getElementById("postcode").value;
const plaats = document.getElementById("plaats").value;

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

    winkelmandje.innerHTML = "";//leegt winkelwagen
    winkelmandTotaal = 0;
    totaalBestelling.textContent = "Totaal bestelling: €0.00";//leegt totaal bestellingen
    controleOverzicht.innerHTML = "";//controleoverzicht leegmaken
    
    bestellingGecontroleerd = false;


});


