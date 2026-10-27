// 03 · A function takes a name and a drink and gives back the sentence "Sam, your latte is ready."
//      It does not touch the page. A second function runs on the button click, calls the first one
//      with "Sam" and "latte", catches the sentence in a const and puts it in the <p>.
// Done when: click = "Sam, your latte is ready." appears below the button.
const button = document.querySelector('#ready-button');
const output = document.querySelector('#message');

button.addEventListener('click', putosOnScreenos);

function concatonatosDeSentencos(name, drink) {
    return `${name}, your ${drink} is ready.`;
}

function putosOnScreenos() {
    const concat = concatonatosDeSentencos('Yannick', 'Cafeeee');
    output.textContent = concat;
}