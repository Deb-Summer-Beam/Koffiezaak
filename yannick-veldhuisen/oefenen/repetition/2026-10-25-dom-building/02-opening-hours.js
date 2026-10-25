const main = document.querySelector('main');
const hours = 'Open today from 9:00 to 17:00';

// ⬜ make a new <p>
const p = document.createElement('p');

// ⬜ put the hours in it as plain text
p.textContent = hours;

// ⬜ add it to main
main.appendChild(p);