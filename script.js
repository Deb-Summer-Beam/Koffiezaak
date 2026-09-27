// ========================
// BESTELLINGEN - PRIJZEN
// ========================

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

const product = document.getElementById("product");
const aantal = document.getElementById("aantal");
const berekenBtn = document.getElementById("berekenBtn");
const totaalPrijs = document.getElementById("totaalPrijs");

berekenBtn.addEventListener("click", () => {

    const gekozenProduct = product.value;
    const gekozenAantal = Number(aantal.value);

    const prijs = prijzen[gekozenProduct];

    const totaal = prijs * gekozenAantal;

    totaalPrijs.textContent = "Totaal: €" + totaal.toFixed(2);//toFixed.(2) zorgt ervoor dat altijd 2 cijfers schter de punt staan
});
const toevoegenBtn = document.getElementById("toevoegenBtn");
const winkelmandje = document.getElementById("winkelmandje");
const totaalBestelling = document.getElementById("totaalBestelling");

let winkelmandTotaal = 0;

toevoegenBtn.addEventListener("click", () => {

    const gekozenProduct = product.value;
    const gekozenAantal = Number(aantal.value);

    const prijs = prijzen[gekozenProduct];
    const totaal = prijs * gekozenAantal;

    const regel = document.createElement("li");

    regel.textContent =
        gekozenAantal + " x " +
        gekozenProduct +
        " - €" +
        totaal.toFixed(2);

    winkelmandje.appendChild(regel);

    winkelmandTotaal = winkelmandTotaal + totaal;

    totaalBestelling.textContent =
        "Totaal bestelling: €" + winkelmandTotaal.toFixed(2);
});
const controleerBtn = document.getElementById("controleerBtn");
const controleOverzicht = document.getElementById("controleOverzicht");

controleerBtn.addEventListener("click", () => {

    const naam = document.getElementById("naam").value;
    const email = document.getElementById("email").value;
    const telefoon = document.getElementById("telefoon").value;
    const adres = document.getElementById("adres").value;
    const postcode = document.getElementById("postcode").value;
    const plaats = document.getElementById("plaats").value;

    controleOverzicht.innerHTML =
        "<h3>👤 Controleer je gegevens</h3>" +
        "<p>Naam: " + naam + "</p>" +
        "<p>E-mail: " + email + "</p>" +
        "<p>Telefoon: " + telefoon + "</p>" +
        "<p>Adres: " + adres + "</p>" +
        "<p>Postcode: " + postcode + "</p>" +
        "<p>Plaats: " + plaats + "</p>" +
        "<p>Totaal bestelling: €" + winkelmandTotaal.toFixed(2) + "</p>";
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

    alert("☕ Bedankt voor je bestelling!");//anders krijgt dit
});


