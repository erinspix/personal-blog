function saveBlogPost(blogPost) {
    // Get the current list of blog posts
    const posts = getBlogPosts();
    
    // Add the new blog post to the list
    posts.push(blogPost);
    
    // Save the updated list back to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getBlogPosts() {
    // Retrieve blog posts from localStorage, return an empty array if none exist
    return JSON.parse(localStorage.getItem('posts')) || [];
}

function toggleLightDarkMode() {
    // Toggle between light and dark mode by adding/removing the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
}
