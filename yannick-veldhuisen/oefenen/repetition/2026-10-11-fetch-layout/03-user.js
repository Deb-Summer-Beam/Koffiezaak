const button = document.querySelector('#load');
const output = document.querySelector('#output');

// why: async, so inside the function you can use await to wait for the server's answer
async function loadUser() {
    output.textContent = 'Loading...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/userss/1');

        if (!response.ok) {
            throw new Error(`Could not load user: ${response.status}`);
        }
        // ⬜ 3 lines here: is the response NOT okay (status outside 200–299)? Then throw an error with the status in it.
        // why: fetch itself only fails on a network error; to fetch, a 404 still counts as "success"

        // why: json() reads the body and turns it into a JS object; that takes time too, hence await
        const user = await response.json();
        output.textContent = `${user.name} lives in ${user.address.city}`;
    } catch (error) {
        // why: you end up here on a network error AND on the error you throw above
        output.textContent = 'The user could not be loaded.' + ` ${error}`;
    }
}

// why: addEventListener in JS rather than onclick in the HTML keeps structure and behaviour separate
button.addEventListener('click', loadUser);


// is seemed to work wihtout my addition already, even when adding an s to /userss/1