console.log("js werkt!!");

// 1 - h1 tijdelijk groen maken
const maakTitelGroen = () => {
    const titel = document.querySelector("h1");
    titel.style.color = "green";
    console.log("h1 is groen gemaakt");
};
maakTitelGroen();

// 2 - Afbeelding rechtop / draaien
function zetRechtop() {
    const foto = document.getElementById("foto");
    foto.classList.remove("rotate180");
    foto.classList.add("rotate0");
}

function draai180() {
    const foto = document.getElementById("foto");
    foto.classList.remove("rotate0");
    foto.classList.add("rotate180");
}

document.getElementById("rechtopBtn").onclick = zetRechtop;
document.getElementById("draaiBtn").onclick = draai180;

// 3 - Balk berekenen
function inhoudBalk(l, b, h) {
    return l * b * h;
}

function toonInhoud() {
    const resultaat = inhoudBalk(8, 3, 2);
    document.getElementById("inhoudResultaat").innerText =
        "De inhoud van de balk is: " + resultaat;
}
toonInhoud();

// 4 - Toggle button kleur
const btn = document.getElementById("colorBtn");
btn.addEventListener("click", function () {
    btn.classList.toggle("green");
});

// 5 - Paragraaf togglen
function toggleParagraph() {
    const p = document.getElementById("paragraph");
    p.classList.toggle("paragraph-style");
}



