const h2names = document.querySelectorAll("h2");
console.log(h2names);


function calculateH2s() {
    let h2counter = 0;
    for (let i = 0; i < h2names.length; i++) {
        console.log("Counter staat nu op: " + i);
        h2counter++;
    }
    console.log(h2counter);
    document.querySelector('#counteroutput').textContent = "Aantal H2's: " + h2counter;
}

function assignClass() {
    for (let i = 0; i < h2names.length; i++) {
        if (!h2names[i].classList.contains("accent")) {
            h2names[i].classList.add("accent");
        }
        console.log(h2names[i].classList.contains("accent"));
    }
}