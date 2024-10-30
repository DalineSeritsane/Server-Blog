const fs = require("fs-extra");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userBlog = path.join(__dirname, "../data/users"); // Use __dirname for relative path

exports.signup = async (req, res) => {
    try {
        const { id, password, title, content, comments } = req.body;

        if (!id || !password) {
            return res.status(400).json({ message: "ID and password are required" });
        }

        // Hash the password for secure storage
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = {
            id,
            blogs: [
                {
                    title: "First Blog Post",
                    content: "This is the content of the first blog post",
                    comments: [
                        { id: 1, author: "Swarts", text: "Amazing view!" },
                        { id: 2, author: "Lou", text: "Couples deserve such sight" }
                    ]
                },
                {
                    title: "Second Blog Post",
                    content: "Other places experienced posts",
                    comments: [
                        { id: 1, author: "Lisle", text: "Very interesting, I can not wait for our trip!" }
                    ]
                }
            ],
            hashedPassword
        };

        // Define the path to the user's JSON file
        const userFile = path.join(userBlog, `${newUser.id}.json`);  // Ensure each file is saved as JSON

        // Write the new user data to a JSON file
        await fs.writeJson(userFile, newUser);

        // Respond with success message
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error signing up user", error: error.message });
    }
};
