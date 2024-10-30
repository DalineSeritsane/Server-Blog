const express = require('express');
const fs = require("fs-extra");
const path = require("path");
const authorRoutes = require("./controllers/routes/authorRoutes");
const app = express();
app.use(express.json);
const authorController = require("./controllers/authorController");



app.get("/", (req, res)=> {
    console.log("running get")
    res.send("Welcome to my Blog website")
})

// Route to fetch all blog posts
app.get("/api/posts", (req, res) => {
    console.log("GET request to fetch all blog posts");
    res.json(blogPosts);
}); 

// Route to fetch a single blog post by its ID
app.get("/api/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find((p) => p.id === postId);

    if (post) {
        console.log(`GET request to fetch blog post with ID: ${postId}`);
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// Route to fetch comments for a specific blog post
app.get("/api/posts/:id/comments", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find((p) => p.id === postId);

    if (post) {
        console.log(`GET request to fetch comments for post ID: ${postId}`);
        res.json(post.comments);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// POST route to add a new blog post
app.post("/api/posts", (req, res) => {
    const newPost = {
        id: blogPosts.length + 1, 
        title: req.body.title,
        content: req.body.content,
        comments: [] 
    };
    
    blogPosts.push(newPost); 
    console.log("New blog post created:", newPost);
    res.status(201).json(newPost); 
});

app.put("/api/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find((p) => p.id === postId);

    if (post) {
       
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;

        console.log(`Blog post with ID ${postId} has been updated.`);
        res.json(post); 
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

app.delete("/api/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = blogPosts.findIndex((p) => p.id === postId);

    if (postIndex !== -1) {
        const deletedPost = blogPosts.splice(postIndex, 1); 
        console.log(`Blog post with ID ${postId} has been deleted.`);
        res.json(deletedPost[0]); 
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

app.use("/api/author", authorRoutes);

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));