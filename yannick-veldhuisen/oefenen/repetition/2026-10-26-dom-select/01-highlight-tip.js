const tip = document.querySelector('#tip');
const button = document.querySelector('#highlight-button');

// why: pass the function name without (), so the browser calls it on each click instead of right now
button.addEventListener('click', switchHighlight);

function switchHighlight() {
  // why: one method that adds the class when it's missing and removes it when it's there, so no if/else needed
  tip.classList.toggle('highlight');
}
