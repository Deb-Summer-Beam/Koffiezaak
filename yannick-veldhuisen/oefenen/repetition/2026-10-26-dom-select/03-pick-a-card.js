// 03 · Clicking "Pick" puts the class "picked" on the card; clicking again takes it off.
// Done when: first click = thick green border, second click = thin gray border again.
const card = document.querySelector('#card');
const button = document.querySelector('#pick-button');

button.addEventListener('click', togglePickedCard);

function togglePickedCard() {
    card.classList.toggle('picked');
}