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
  console.log(datumVeld.value);
  const gekozenDatum = new Date(datumVeld.value);
  const weekdag = gekozenDatum.getDay();
  const tijdenVandaag = Object.values(openingstijden)[weekdag];

  const gekozenDag = gekozenDatum.getDate();
  const gekozenMaand = gekozenDatum.getMonth() + 1;
  if(
    (gekozenDag === 1 && gekozenMaand === 1) ||
    (gekozenDag === 25 && gekozenMaand === 12) ||
    (gekozenDag === 26 && gekozenMaand === 12)
  ) {
    datumMelding.textContent = "Helaas, we zijn gesloten op deze dag.";
    tijdVeld.disabled = true;
  } else {
    datumMelding.textContent = "";
    tijdVeld.disabled = false;
  }

  console.log(gekozenDag, gekozenMaand);

});
