const list = document.querySelector('#list');

// ⬜ one word: the method that makes a brand-new element
const item = document.createElement('li');

// why: textContent puts the text in as plain text, so a "<b>" in it shows up as letters, never as HTML
item.textContent = 'Oat milk';

// why: a new element only exists in memory until you hang it under something that is already on the page
list.appendChild(item);
