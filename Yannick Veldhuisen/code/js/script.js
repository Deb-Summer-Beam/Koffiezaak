function toggleBackground() {
    document.getElementById('test').classList.toggle("myStyle");
}

function rotateImage() {
    document.querySelector('.testimage').classList.add("rotateImage");
}

function normalizeImage() {
    document.querySelector('.testimage').classList.remove("rotateImage");
}

function calculateVolume(l, b, h) {
    let result = l*b*h;
    document.getElementById('demo').innerHTML = result;
}