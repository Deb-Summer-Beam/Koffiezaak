const button = document.querySelector('#beans-button');
const answer = document.querySelector('#answer');

button.addEventListener('click', showGrams);

function gramsNeeded(cups, gramsPerCup) {
  return cups * gramsPerCup;
}

function showGrams() {
  // ⬜ one line here: call gramsNeeded with 2 and 500, catch the result in a const
  const total = gramsNeeded(2, 500);
  // ⬜ one line here: put "You need … grams of beans." on the page
  answer.textContent = `You need ${total} grams of beans.`
}
