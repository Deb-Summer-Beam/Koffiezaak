const button = document.querySelector('#reload');
const resultContainer = document.querySelector('#results');
const statusBar = document.querySelector('#status-melding');

async function requestPosts() {
    button.disabled = true;
    statusBar.textContent = "Gegevens laden...";
    resultContainer.textContent = "";

    try {
        const url = "https://jsonplaceholder.typicode.com/posts?_limit=7";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request mislukt: ${response.status}`);
        }

        const gegevens = await response.json();
        const aantalPosts = gegevens.length;
        // Code om deze te tonen op de pagina
        statusBar.textContent = "";
        gegevens.forEach(appendCards);
        button.disabled = false;
        if (gegevens.length < 1){
            statusBar.textContent = `Er zijn geen (${aantalPosts}) posts gevonden.`;
        } else {
            statusBar.textContent = `Er zijn ${aantalPosts} posts gevonden.`;
        }

    }
    catch (error) {
        // Code om een begrijpelijke foutmelding te tonen
        statusBar.textContent = `Posts konden niet worden opgehaald, probeer het over een paar minuten nog een keer.` ;
        button.disabled = false;
    }
}

button.addEventListener('click', requestPosts);

function appendCards(postCard) {
    resultContainer.appendChild(createCard(postCard));
}

function createCard(post) {
    const newArticle = document.createElement('article');
    const newUserIdH2 = document.createElement('h2');
    newUserIdH2.textContent = post.userId;
    const newIdH2 = document.createElement('h2');
    newIdH2.textContent = post.id;
    const newTitleH1 = document.createElement('h1');
    newTitleH1.textContent = post.title;
    const newBodyP = document.createElement('p');
    newBodyP.textContent = post.body;

    newArticle.appendChild(newUserIdH2);
    newArticle.appendChild(newIdH2);
    newArticle.appendChild(newTitleH1);
    newArticle.appendChild(newBodyP);

    return newArticle;

}