const reserveerFormulier = document.getElementById("reserveerFormulier");
const datumVeld = document.getElementById("datum");
const tijdVeld = document.getElementById("tijd");
const datumMelding = document.getElementById("datumMelding");
const reserveerBevestiging = document.getElementById("reserveerBevestiging");

const vandaag = new Date();

const jaar = vandaag.getFullYear();
const maand = vandaag.getMonth() + 1;
const dag = vandaag.getDate();


const maandTekst = String(maand).padStart(2, "0");
const dagTekst = String(dag).padStart(2, "0");

const vandaagTekst = jaar + "-" + maandTekst + "-" + dagTekst;

datumVeld.min = vandaagTekst;

const openingstijden = {
  zondag: { open: "10:00", dicht: "16:00" },
  maandag: { open: "12:00", dicht: "18:00" },
  dinsdag: { open: "12:00", dicht: "18:00" },
  woensdag: { open: "12:00", dicht: "18:00" },
  donderdag: { open: "12:00", dicht: "21:00" },
  vrijdag: { open: "12:00", dicht: "18:00" },
  zaterdag: { open: "09:00", dicht: "16:00" },
};


datumVeld.addEventListener("change", () => {
  const gekozenDatum = new Date(datumVeld.value);
  const weekdag = gekozenDatum.getDay();
  const tijdenVandaag = Object.values(openingstijden)[weekdag];

  const gekozenDag = gekozenDatum.getDate();
  const gekozenMaand = gekozenDatum.getMonth() + 1;
  if (
    (gekozenDag === 1 && gekozenMaand === 1) ||
    (gekozenDag === 25 && gekozenMaand === 12) ||
    (gekozenDag === 26 && gekozenMaand === 12)
  ) {
    datumMelding.textContent = "Helaas, we zijn gesloten op deze dag.";
    tijdVeld.disabled = true;
  } else {
    datumMelding.textContent = "";
    tijdVeld.disabled = false;

    tijdVeld.replaceChildren();

    const eersteOptie = document.createElement("option");
    eersteOptie.value = "";
    eersteOptie.textContent = "-- Kies een tijd --";
    tijdVeld.appendChild(eersteOptie);

    const openUur = parseInt(tijdenVandaag.open);
    const dichtUur = parseInt(tijdenVandaag.dicht);

    for (let tijdUur = openUur; tijdUur < dichtUur; tijdUur++) {
      const uurTekst = String(tijdUur).padStart(2, "0");

      const optieHeel = document.createElement("option");
      optieHeel.value = uurTekst + ":00";
      optieHeel.textContent = uurTekst + ":00";
      tijdVeld.appendChild(optieHeel);

      const optieHalf = document.createElement("option");
      optieHalf.value = uurTekst + ":30";
      optieHalf.textContent = uurTekst + ":30";
      tijdVeld.appendChild(optieHalf);
    }
  }
});

reserveerFormulier.addEventListener("submit", (event) => {
  event.preventDefault();

  reserveerBevestiging.textContent = "";

  //gesloten dag; een veld dat op slot staat controleert de browser niet. 
  if (tijdVeld.disabled === true) {
    reserveerBevestiging.textContent = "Helaas, we zijn gesloten op deze dag.";
    return;

  }

  //Gegevens ophalen

  const naam = document.getElementById("naam").value;
  const email = document.getElementById("email").value;
  const telefoon = document.getElementById("telefoon").value;
  const personen = document.getElementById("personen").value;

  //verlden met alleen spaties afvangen (Test van Deborah)
  if (naam.trim() === "" || email.trim() === "" || telefoon.trim() === "" || personen.trim() === "") {
    reserveerBevestiging.textContent = "Vul alstublieft alle velden in.";
    return;
  }

  //Bevestiging met textContent, niet innerHTML (Test van Deborah)
  const datumNL = new Date(datumVeld.value).toLocaleDateString("nl-NL");
  reserveerBevestiging.textContent =
    "Bedankt " + naam.trim() + "! Je tafel voor " + personen + " op " + datumNL + " om " + tijdVeld.value + " is gereserveerd.";

  // Formulier leegmaken na verzenden
  reserveerFormulier.reset();
  datumMelding.textContent = "";
  tijdVeld.replaceChildren();
  const startOptie = document.createElement("option");
  startOptie.value = "";
  startOptie.textContent = "-- Kies een datum --";
  tijdVeld.appendChild(startOptie);
  tijdVeld.disabled = true;
});