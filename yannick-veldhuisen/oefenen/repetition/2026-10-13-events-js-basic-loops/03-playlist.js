const songs = ['Sunrise', 'Mountain Road', 'Snow Day', 'Night Drive'];

const songList = document.querySelector('#songList');
const songCount = document.querySelector('#songCount');

function addSong(song) {
    const listItem = document.createElement('li');
    listItem.textContent = song;

    songList.appendChild(listItem);
    // ⬜ make an <li>
    // ⬜ put the song's name in it
    // ⬜ add it to the list
}

// why: forEach calls addSong once per song and hands it that one song
songs.forEach(addSong);

songCount.textContent = `${songs.length} songs`;
