const h2Q = document.querySelectorAll("h2");
const button1 = document.querySelector('#telKoppen').addEventListener('click', countH2s);
console.log(h2Q);
const button2 = document.querySelector('#assignAccent').addEventListener('click', addAccent);



function countH2s() {
    let h2Counter = 0;
    for (i = 0; i < h2Q.length; i++) {
        h2Counter++;
        console.log("h2Counter is nu " + h2Counter)
    }
    console.log(h2Counter + " is de eindstand");
    document.querySelector('#answerHeaderAmount').textContent = "Het aantal H2-koppen is " + h2Counter;
}

function addAccent() {

    for (i = 0; i < h2Q.length; i++) {
        if (!h2Q[i].classList.contains('accent')) {
            h2Q[i].classList.add('accent');
        }
    }
}