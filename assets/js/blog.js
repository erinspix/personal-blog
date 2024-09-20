document.addEventListener('DOMContentLoaded', function() {
    // When the DOM is fully loaded, grab posts from localStorage or start with an empty array
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('posts');
  
    // Loop through each post and create a new div to display it
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post'; // Add a class for styling

        // Add the post content to the div using template literals
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>by ${post.username}</small>
        `;

        // Append the new post element to the posts container
        postsContainer.appendChild(postElement);
    });
  
    // Toggle light/dark mode when the button is clicked
    document.getElementById('toggleMode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
  
    // Back button functionality to navigate to the home page
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
