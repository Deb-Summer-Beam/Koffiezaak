const afbeelding = document.getElementById("logo");
console.log(afbeelding);

const koffiePrijs = 5.5;

const koffieAantal = 3;
function berekenTotaalPrijs(prijs, aantal) {
    return prijs * aantal;
}
console.log(berekenTotaalPrijs(koffiePrijs, koffieAantal));

console.log(berekenTotaalPrijs(6.5, 5));

const bedragElement = document.getElementById("totaalbedrag");
const knop = document.getElementById("berekenTotaal");

if (bedragElement && knop) {
    bedragElement.textContent = berekenTotaalPrijs(koffiePrijs, koffieAantal);

    knop.addEventListener("click", function () {
        const invoer = document.getElementById("aantalInvoer").value;
        console.log(invoer);

        const aantal = Number(invoer);

        if (invoer === "") {
            bedragElement.textContent = "Vul een aantal in";
        } else if (!Number.isInteger(aantal) || aantal < 1) {
            bedragElement.textContent = "Vul een heel getal van minimaal 1 in";
        } else {
            bedragElement.textContent = berekenTotaalPrijs(koffiePrijs, aantal);
        }
    });
}


const laadknop = document.querySelector("#laadknop");
const statusmelding = document.querySelector("#status");
const resultaten = document.querySelector("#resultaten");

async function laadGegevens() {
  statusmelding.textContent = "Gegevens laden...";

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  // Als het antwoord niet succesvol is, stop dan en geef een fout door//
  if (!response.ok) {
    throw new Error(`Request mislukt: ${response.status}`);
  }
  const gegevens = await response.json();
}

laadknop.addEventListener("click", laadGegevens);