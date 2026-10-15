const passwordInput = document.querySelector('#password');
const messageOutput = document.querySelector('#message');
const checkButton = document.querySelector('#checkPassword');

const commonPasswords = ['password', '123456', 'qwerty'];

checkButton.addEventListener('click', checkPassword);

function checkPassword() {
    const input = passwordInput.value;
    if (input == '') {
        messageOutput.textContent = 'Type a password';
    } else if (commonPasswordCheck()) {
        messageOutput.textContent = "Too common";
    } else if (input.length < 8) {
        messageOutput.textContent = "Too short";
    } else {
        messageOutput.textContent = "Looks good";
    }
}

function commonPasswordCheck() {
    let tooCommon = false;
    commonPasswords.forEach(function commonPasswordChecker(common) {
        if (common == passwordInput.value) {
            tooCommon = true;
        }
    }); return tooCommon;
}

