const fs = require("fs-extra");
const path = require("path");
const bcrypt = require("bcryptjs");

const databasePath = path.join(__dirname, "../database.json"); // Define path to database.json

exports.signup = async (req, res) => {
    try {
        const { id, password } = req.body;

        if (!id || !password) {
            return res.status(400).json({ message: "ID and password are required" });
        }

        // Hash the password for secure storage
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object with essential data only
        const newUser = {
            id,
            blogs: [], // Initialize an empty blogs array
            hashedPassword
        };

        // Load existing users from database.json (or create an empty array if the file doesn't exist)
        let users = [];
        if (await fs.pathExists(databasePath)) {
            users = await fs.readJson(databasePath);
        }

        // Check if the user ID already exists
        const existingUser = users.find(user => user.id === id);
        if (existingUser) {
            return res.status(400).json({ message: "User ID already exists" });
        }

        // Add the new user to the users array
        users.push(newUser);

        // Write the updated users array to database.json
        await fs.writeJson(databasePath, users);

        // Respond with success message
        res.status(201).json({ message: "User registered successfully", user: { id: newUser.id } });
    } catch (error) {
        res.status(500).json({ message: "Error signing up user", error: error.message });
    }
};
