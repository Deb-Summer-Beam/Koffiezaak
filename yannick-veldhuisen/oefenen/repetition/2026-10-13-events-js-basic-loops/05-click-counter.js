// 1. grab both buttons and the paragraph

// 2. a variable for the count that can change, starting at 0

// 3. a function for a click: count + 1, show it; at 5 show "Five! That's enough." and disable the button

// 4. a function for reset: count back to 0, show it, enable the button again

// 5. connect each button to its function

const clickButton = document.querySelector('#clickButton');
const resetButton = document.querySelector('#resetButton');
const clickCount = document.querySelector('#clickCount');


clickButton.addEventListener('click', addCounter);
let clickCounter = 0;

function addCounter() {
    if (clickCounter < 4) {
        clickCounter++;
        clickCount.textContent = clickCounter;
    } else{
        clickCounter++;
        clickButton.disabled = true;
        clickCount.textContent = `${clickCounter}, that's enough!`;
    }
}

resetButton.addEventListener('click', resetCounter);

function resetCounter() {
    clickCounter = 0;
    clickCount.textContent = clickCounter;
    clickButton.disabled = false;

}