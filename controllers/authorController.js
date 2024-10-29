const fs = require("fs-extra");
const path = require("path");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const userBlog = path.join(_blogname, "../data/users");

exports.signup = async(req, res) => {
    try{
        const {username, email, password} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser ={
            id: Date.now().toString(),
            fullname,
            email,
            password: hashedPassword

        };
        const userFile = path.join(userBlog, `${newUser.id}`);
        await fs.writeJson(userFile, newUser);
        res.status(201).json({message: "User registered Successfully", user: newUser});
    }catch (error) {
        res.status(500).json({message: "Error signing up user", error:error.message});
    }
};