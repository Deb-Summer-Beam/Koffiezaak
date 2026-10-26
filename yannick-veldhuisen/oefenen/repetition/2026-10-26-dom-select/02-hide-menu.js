const drinks = document.querySelector('#drinks');
// ⬜ one line here: get the button
const button = document.querySelector('#menu-button');

// ⬜ one line here: run switchMenu on every click
button.addEventListener('click', switchMenu);


function switchMenu() {
  // ⬜ one line here: the class "hidden" on the list goes on / off
  drinks.classList.toggle('hidden');
}
