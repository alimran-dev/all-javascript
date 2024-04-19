fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => showComments(data));

function showComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
        <h3>Post ID: ${comment.postId}</h3>
        <h4>User ID: ${comment.id}</h4>
        <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(commentDiv);
    }
}
showComments();