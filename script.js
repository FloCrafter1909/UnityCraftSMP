document.addEventListener('DOMContentLoaded', function () {
    const forumForm = document.getElementById('forum-form');
    const postsContainer = document.getElementById('posts');

    forumForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const postContent = document.getElementById('post').value;

        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<strong>${username}:</strong><p>${postContent}</p>`;

        postsContainer.appendChild(postElement);

        forumForm.reset();
    });

    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Danke für dein Feedback!');
        feedbackForm.reset();
    });
});