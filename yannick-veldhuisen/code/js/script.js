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

function toggleMap() {
    document.querySelector('.hidemap').classList.toggle('map');
}

function addText() {
    document.querySelector('#classtest').innerHTML = 'Ons assortiment bestaat uit verschillende soorten koffie, thee, taarten, muffins, cupcakes, croissants, koekjes en kleine gebakjes. Of je nu zin hebt in een sterke espresso, een romige cappuccino of een lekker stukje cheesecake, er is voor iedereen iets lekkers.';
}