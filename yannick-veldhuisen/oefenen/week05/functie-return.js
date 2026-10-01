const prijs = 4;
const aantal = 2;

function multiply(p, a) {
    let antwoord = p * a;
    console.log(antwoord);
    return antwoord;
}

const nogEenAntwoord = multiply(8,2);

document.querySelector('#demo').textContent = nogEenAntwoord;