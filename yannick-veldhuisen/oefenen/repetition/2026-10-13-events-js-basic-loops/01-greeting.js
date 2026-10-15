const greetButton = document.querySelector('#greetButton');
const greeting = document.querySelector('#greeting');

function showGreeting() {
    greeting.textContent = 'Good morning!';
}

// why: addEventListener gets the function itself, so the browser can call it later, on every click
greetButton.addEventListener('click', showGreeting);
