const button = document.querySelector('#button');
button.addEventListener('click', doSomething);

function doSomething() {
    const list = document.querySelectorAll('li');
    list.forEach(doSomethingElse);
}

function doSomethingElse(listElement) {
    if (!listElement.classList.contains('done')) {
        listElement.classList.toggle('doneButDifferent');
        listElement.classList.toggle('done');
    } else {
        listElement.classList.toggle('done');
        listElement.classList.add('doneButDifferent');
    }
}