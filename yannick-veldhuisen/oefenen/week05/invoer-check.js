const button = document.querySelector('#submitButton');

button.addEventListener("click", validityCheck);


function validityCheck() {
    const invoerRaw = document.querySelector('#aantal').value.trim();
    const invoer = Number(invoerRaw);
    if (invoerRaw == "") {
        document.querySelector('#melding').textContent = "Vul een aantal in";
    } else if (!(Number.isInteger(invoer) && invoer > 0)) {
        document.querySelector('#melding').textContent = "\"" + invoerRaw + "\" is geen geldig aantal";
    } else if (invoer > 10) {
        document.querySelector('#melding').textContent = "Neem contact op voor een groepsbestelling";
    } else {
        document.querySelector('#melding').textContent = "Je bestelling van " + invoer + " koppen staat klaar";
    }
    document.querySelector('#aantal').value = "";
}