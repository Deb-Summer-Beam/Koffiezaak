const loadAlbumsButton = document.querySelector('#loadAlbums');
const statusLine = document.querySelector('#statusLine');
const albumContainer = document.querySelector('#albumContainer');

async function loadAlbums() {
    loadAlbumsButton.disabled = true;
    albumContainer.textContent = '';
    statusLine.textContent = 'Loading...';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=6');

        if (!response.ok) {
            throw new Error(`Status not ok: ${response.status}`);
        }

        const albums = await response.json();

        albums.forEach(appendAlbum);

        loadAlbumsButton.disabled = false;
        statusLine.textContent = `${albums.length} albums loaded`;

    } catch (error) {
        statusLine.textContent = `Caught error: ${error}`;
        loadAlbumsButton.disabled = false;
    }
}


function appendAlbum(album) {
    albumContainer.appendChild(createArticles(album));
}


function createArticles(album) {
    const article = document.createElement('article');
    const title = document.createElement('h1');
    title.textContent = album.title;

    article.appendChild(title);
    return article;
}



loadAlbumsButton.addEventListener('click', loadAlbums);