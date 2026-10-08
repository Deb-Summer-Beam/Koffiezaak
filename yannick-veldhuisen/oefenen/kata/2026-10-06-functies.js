const naam = "Sanne";
const drankje = "Chai Latte";
const prijs = 4.95;
const aantal = 2;

const trigger = document.querySelector('#trigger');
trigger.addEventListener('click', eventHandler);

function eventHandler() {
    document.querySelector('#output1').textContent = createSentence(naam, drankje);
    document.querySelector('#output2').textContent = calculateTotal(prijs, aantal);
}

function createSentence(x, y) {
    return x + " bestelt een " + y;
}

function calculateTotal(a, b) {
    return a * b;
}

console.log(trigger);