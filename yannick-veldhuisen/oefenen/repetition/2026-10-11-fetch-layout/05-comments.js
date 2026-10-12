// 1. grab the #comments section and the #status line
const statusBar = document.querySelector('#status');
const commentSection = document.querySelector('#comments');




// 2. make an async function that loads the comments
async function buildCommentSection() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');

        if (!response.ok) {
            throw new Error(`Could not load comments: ${response.status}`);
        }

        const comments = await response.json();
        comments.forEach(createArticle);


    } catch (error) {
        statusBar.textContent = `Something went wrong, pleaaaaase try again a little later. Error: ${error}`;
    }
}

function createArticle(comment) {
    const commentArticle = document.createElement('article');
    const emailH2 = document.createElement('h2');
    const nameP = document.createElement('p');

    emailH2.textContent = comment.email;
    nameP.textContent = comment.name;
    commentArticle.appendChild(emailH2);
    commentArticle.appendChild(nameP);
    commentSection.appendChild(commentArticle);
}

buildCommentSection();

// 3.   fetch https://jsonplaceholder.typicode.com/comments?postId=1

// 4.   response not okay → throw an error

// 5.   turn the body into an array

// 6.   for each comment: make an article with an h2 (email) and a p (name), and append it to the section

// 7.   on an error: a friendly message in the status line

// 8. call the function straight away, so the comments appear on page load
