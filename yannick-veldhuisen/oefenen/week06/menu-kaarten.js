const menukaarten = document.getElementById('kaart-lijst');
console.log(menukaarten);

const onderdelen = [
    {
        titel: "Matcha Twirl",
        beschrijving: "Een mix van Matcha, (keuze)melk en (optioneel)slagroom",
        prijs: 4.99
    },
    {
        titel: "Cappuccino Caramel",
        beschrijving: "Cappuccino met een swirl van caramelsaus",
        prijs: 4.49
    },
    {
        titel: "Tripple Shot Espresso",
        beschrijving: "Precies wat je zou verwachten, 3x een stevige Espresso",
        prijs: 3.99
    },
    {
        titel: "Hazelnut Cloud Latte",
        beschrijving: "Latte met hazelnootsiroop en een luchtige laag melkschuim",
        prijs: 4.79
    },
    {
        titel: "Iced Vanilla Brew",
        beschrijving: "Koud gezette koffie op ijs met een vleugje vanille en (keuze)melk",
        prijs: 4.29
    },
    {
        titel: "Chai Cinnamon Swirl",
        beschrijving: "Kruidige Chai latte met (keuze)melk en een swirl van kaneel",
        prijs: 4.59
    }
]

function createCards(drank) {

    const newArticle = document.createElement('article');
    newArticle.classList.add('menukaartStyle');
    
    const newHeader = document.createElement('h3');
    newHeader.textContent = drank.titel;

    const newContent1 = document.createElement('p');
    newContent1.textContent = drank.beschrijving;

    const newContent2 = document.createElement('p');
    newContent2.textContent = drank.prijs;

    newArticle.appendChild(newHeader);
    newArticle.appendChild(newContent1);
    newArticle.appendChild(newContent2);

    return newArticle;

}

function appendCards(drink) {
    menukaarten.appendChild(createCards(drink));
}

onderdelen.forEach(appendCards);

