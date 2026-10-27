const button = document.querySelector('#price-button');
const result = document.querySelector('#result');

button.addEventListener('click', showTotal);

// why: this function only calculates; it doesn't touch the page, so you can reuse it anywhere
function totalPrice(cups, pricePerCup) {
  return cups * pricePerCup;
}

function showTotal() {
  // why: the values go in as arguments here; inside totalPrice they are called cups and pricePerCup
  const total = totalPrice(3, 2.5);
  result.textContent = 'Total: €' + total.toFixed(2);
}
