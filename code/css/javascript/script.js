const werkenbij = document.getElementById("werkenbij");
if (werkenbij) {
    werkenbij.style.color = "green";

}


function wisselOpmaak() {
    document.getElementById("oefenen").classList.toggle("uitgelicht");

}

function draaifoto() {
    document.getElementById("werkfoto").classList.add("gedraaid");
}

function fotorechtop() {
    document.getElementById("werkfoto").classList.remove("gedraaid");
}

function berekeninhoud(lengte, breedte, hoogte) {
    return lengte * breedte * hoogte;

}

  const resultaat = berekeninhoud(8, 3, 2);
    if(document.getElementById("antwoord")){
        document.getElementById("antwoord").textContent = resultaat;
    }

const words = [
    "CozyBrew",
    "Warm, Cozy, Sustainable",
    "Bedankt voor je bezoek"
];

const textElement = document.getElementById("text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 25;
const pauseAfterTyping = 1500;
const pauseAfterDeleting = 500;

function typeWriter() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        charIndex++;
        textElement.textContent = currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseAfterTyping);
            return;
        }

        setTimeout(typeWriter, typingSpeed);

    } else {
        charIndex--;
        textElement.textContent = currentWord.substring(0, charIndex);

        if (charIndex === 0) {
            isDeleting = false;

            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }

            setTimeout(typeWriter, pauseAfterDeleting);
            return;
        }

        setTimeout(typeWriter, deletingSpeed);
    }
}

if (textElement) {
    typeWriter();
}