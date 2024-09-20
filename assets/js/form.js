document.getElementById('blogForm').addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
  
    // Get values from form fields
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    // Check if all fields are filled, otherwise show an alert
    if (!username || !title || !content) {
        alert('Please complete all fields');
        return;
    }
  
    // Create a post object with the form data
    const post = {
        username,
        title,
        content
    };
  
    // Get existing posts from localStorage, or use an empty array if none exist
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    // Add the new post to the array
    posts.push(post);
    
    // Store the updated posts array in localStorage
    localStorage.setItem('posts', JSON.stringify(posts));
  
    // Redirect to the blog page after saving the post
    window.location.href = 'blog.html';
});
  
document.getElementById('toggleMode').addEventListener('click', function() {
    // Toggle between light and dark mode by switching a class on the body
    document.body.classList.toggle('dark-mode');
});
