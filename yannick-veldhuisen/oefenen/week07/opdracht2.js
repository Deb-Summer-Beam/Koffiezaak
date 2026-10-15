const url = "https://jsonplaceholder.typicode.com/posts/2";

const titel = document.querySelector('#titel');
const tekst = document.querySelector('#bericht');

async function toonBericht() {
const uitkomstFetch = await fetch(url);
const gegevens = await uitkomstFetch.json();

titel.textContent = gegevens.title;
tekst.textContent = gegevens.body;
}

toonBericht();

