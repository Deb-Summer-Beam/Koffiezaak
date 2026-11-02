// 01 · Loads to-do number 1 from JSONPlaceholder and shows its title in the <p>.
//      If the request fails, the <p> shows an error message instead.
// Done when: the page shows "delectus aut autem".
//            Change the URL to .../todos/9999 and you see "Could not load: 404".

const output = document.querySelector('#todo');

// why: async lets you use await inside, so each line waits for the one before it
async function loadTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
    // why: fetch only fails by itself on a network error; a 404 still arrives as a response, so you check it yourself
    if (!response.ok) {
      throw new Error(response.status);
    }
    // why: json() reads the body and turns it into a JS object; that takes time too, so await again
    const todo = await response.json();
    output.textContent = todo.title;
  } catch (error) {
    // why: the throw above jumps straight to here, exactly like a network error would
    output.textContent = 'Could not load: ' + error.message;
  }
}

loadTodo();
