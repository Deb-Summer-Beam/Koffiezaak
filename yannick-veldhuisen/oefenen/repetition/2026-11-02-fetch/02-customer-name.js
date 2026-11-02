// 02 · Loads customer number 3 from JSONPlaceholder and shows their name in the <p>.
//      If the request fails, the <p> shows an error message instead.
// Done when: the page shows "Clementine Bauch".
//            Change the URL to .../users/9999 and you see "Could not load: 404".

const output = document.querySelector('#customer');

async function loadCustomer() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/9');

    if(!response.ok){
      throw new Error(response.status);
    }
    // ⬜ one line: fetch https://jsonplaceholder.typicode.com/users/3 and wait for the response
    // ⬜ a few lines: if the response is not ok, throw an error with the status code
    const customer = await response.json();
    output.textContent = customer.name;
  } catch (error) {
    output.textContent = 'Could not load: ' + error.message;
  }
}

loadCustomer();
