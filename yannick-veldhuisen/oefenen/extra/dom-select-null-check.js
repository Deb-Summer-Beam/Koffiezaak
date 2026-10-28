const notThere = document.querySelector('#doesNotExist');
const body = document.querySelector('body');

const newP1 = document.createElement('p')
newP1.textContent = 'this is the first text visible';
body.appendChild(newP1);


if (notThere) {
    notThere.addEventListener('click', someFunction)
}

const newP2 = document.createElement('p');
newP2.textContent = 'this text will probably not load';
body.appendChild(newP2);
