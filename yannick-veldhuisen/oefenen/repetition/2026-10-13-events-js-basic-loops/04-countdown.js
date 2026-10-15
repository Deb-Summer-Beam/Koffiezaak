const startButton = document.querySelector('#startButton');
const countdown = document.querySelector('#countdown');

function startCountdown() {
    countdown.textContent = 'Go!';
    // ⬜ whole block: a for loop from 10 down to 1 that builds one piece of text,
    //    then put that text + "Go!" in the paragraph (once, after the loop)
    for (let i = 10; i > 0 ; i--){
        const createBlock = document.createElement('p');
        countdown.appendChild(document.createElement('br'));
        countdown.appendChild(document.createTextNode(i));
        // countdown.appendChild(createBlock);
    }
}

startButton.addEventListener('click', startCountdown);
