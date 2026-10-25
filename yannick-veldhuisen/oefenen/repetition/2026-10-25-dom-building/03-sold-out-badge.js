// 03 · From blank. Done when: a <span> with the text "Sold out" appears inside the card, under "Cinnamon roll".
const card = document.querySelector('#card');
const status = 'Sold out';

const productSection = document.createElement('span');

productSection.textContent = status;

card.appendChild(productSection);