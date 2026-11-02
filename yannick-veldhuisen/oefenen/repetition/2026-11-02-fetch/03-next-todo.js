// 03 · Load to-do number 2 from https://jsonplaceholder.typicode.com/todos/2 and show its title in the <p>.
//      Use an async function with try/catch. If the response is not ok, throw an error with the status code;
//      the catch puts "Could not load: <status>" in the <p>. Call the function once when the page loads.
// Done when: the page shows "quis ut nam facilis et officia qui".
//            With .../todos/9999 instead you see "Could not load: 404".
const output = document.querySelector('#todo');

async function loadTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/9999');

        if (!response.ok) {
            throw new Error(response.status);
        }

        const todo = await response.json();
        output.textContent = todo.title;

    } catch (error) {
        output.textContent = `Could not load: ${error.message}`;
    }
}

loadTodo();