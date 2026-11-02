const output = document.querySelector('#todo');
const button = document.querySelector('#loadButton');

button.addEventListener('click', loadTodo);

async function loadTodo() {
    button.disabled = true;
    try {
        console.log('beginning of try');
        const response = await fetch('https://jsonplaceholder.typicode.invalid/todos/1');

        if (!response.ok) {
            throw new Error(response.status);
        }

        const todo = await response.json();
        output.textContent = todo.title;

    } catch (error) {
        console.log('beginning of catch');
        output.textContent = `Sorry, we could not load the todo: ${error.message}`;
    } finally {
        console.log('beginning of finally');
        button.disabled = false;
    }
}

