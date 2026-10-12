const button = document.querySelector('#count');
const result = document.querySelector('#result');

async function countTodos() {
    result.textContent = 'Loading...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');

        if (!response.ok){
            throw new Error(`Could not load todos: ${response.status}`);
        }

        // ⬜ the block goes here: fetch https://jsonplaceholder.typicode.com/todos?userId=1,
        //    throw an error if the response isn't okay,
        //    and turn the body into an array in a const named todos

        const todos = await response.json();

        let done = 0;
        // why: forEach runs over every item in the array; for each finished task you add one
        todos.forEach(function (todo) {
            if (todo.completed) {
                done++;
            }
        });

        result.textContent = `${done} of the ${todos.length} tasks are done.`;
    } catch (error) {
        result.textContent = 'The tasks could not be loaded.';
    }
}

button.addEventListener('click', countTodos);
