
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

    const verwijderBtn = document.createElement("button");
    
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
const controleerBtn = document.getElementById("controleerBtn");
const controleOverzicht = document.getElementById("controleOverzicht");

controleerBtn.addEventListener("click", () => {

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
    naam === "" ||
    email === "" ||
    telefoon === "" ||
    adres === "" ||
    postcode === "" ||
    plaats === ""
) {
    alert("Vul eerst alle klantgegevens in.");
    return;//alert geven als een van de gegevens ontbreekt
}

    const producten = winkelmandje.querySelectorAll("li");//alle <li>'s  uit winkelmaandje verzameld

    let productenTekst = "";//lege text waarin straks de bestelling wordt verzameld

    producten.forEach((product) => {//voor ieder product gevonden voer de code uit
        const kopie = product.cloneNode(true);//kopie van het origineel in winkelmaandje
                                            //true omdat pakt al de nodes, false zou allen de <li>'s pakken
    kopie.querySelector(".verwijderBtn").remove();
    productenTekst = productenTekst + "<p>" + kopie.textContent + "</p>";//<p> zorgt dat iedere bestelde product netjes op een eigen regel komt

}); 


    controleOverzicht.innerHTML =
        "<h3>👤 Controleer je gegevens</h3>" +
        "<p>Naam: " + naam + "</p>" +
        "<p>E-mail: " + email + "</p>" +
        "<p>Telefoon: " + telefoon + "</p>" +
        "<p>Adres: " + adres + "</p>" +
        "<p>Postcode: " + postcode + "</p>" +
        "<p>Plaats: " + plaats + "</p>" +

         "<h3>🛒 Jouw bestelling</h3>" +
        productenTekst +

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

    const naam = document.getElementById("naam").value;
const email = document.getElementById("email").value;
const telefoon = document.getElementById("telefoon").value;
const adres = document.getElementById("adres").value;
const postcode = document.getElementById("postcode").value;
const plaats = document.getElementById("plaats").value;

if (
    naam === "" ||
    email === "" ||
    telefoon === "" ||
    adres === "" ||
    postcode === "" ||
    plaats === ""
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
    



});


