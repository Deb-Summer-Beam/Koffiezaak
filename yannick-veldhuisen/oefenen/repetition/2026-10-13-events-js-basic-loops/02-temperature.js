const temperatureInput = document.querySelector('#temperature');
const checkButton = document.querySelector('#checkButton');
const advice = document.querySelector('#advice');

function giveAdvice() {
    // why: an input's value is always text, even with type="number"
    const text = temperatureInput.value;

    // why: === compares value AND type, so '' === 0 is false (with == it would be true)
    if (text === '') {
        advice.textContent = 'Type a temperature';
    } else if (Number(text) < 10) {
        advice.textContent = 'Wear a coat';
    } else if (Number(text) < 20) {
        advice.textContent = 'A jumper is enough';
    } else {
        advice.textContent = 'T-shirt weather';
    }
}

checkButton.addEventListener('click', giveAdvice);
