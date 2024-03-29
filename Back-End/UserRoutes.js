// const {Router} = require("express")
// const UserModel = require("./UserSchema")

// const userRoute = Router()

// userRoute.post("/register" , async (req, res) => {
//     try {
//         const user = await UserModel.create(req.body)
//         res.status(200).json(user)
//     } catch (error) {
//         res.status(400).send({error})
//     }
// })


// module.exports = userRoute
// const { Router } = require("express");
// const UserModel = require("./UserSchema");

// const userRoute = Router();

// // Register endpoint
// userRoute.post("/register", async (req, res) => {
//     try {
//         const user = await UserModel.create(req.body);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(400).send({ error });
//     }
// });

// // Login endpoint
// userRoute.post("/login", async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Assuming UserModel has a method to find user by username and password
//         const user = await UserModel.findOne({ username, password });

//         if (!user) {
//             return res.status(401).send("Invalid username or password");
//         }

//         // Set username to the cookie
//         res.cookie("username", username, { httpOnly: true });
//         res.status(200).send("Logged in successfully");
//     } catch (error) {
//         res.status(500).send({ error: "Internal server error" });
//     }
// });

// // Logout endpoint
// userRoute.post("/logout", async (req, res) => {
//     try {
//         // Remove the cookie from the browser
//         res.clearCookie("username");
//         res.status(200).send("Logged out successfully");
//     } catch (error) {
//         res.status(500).send({ error: "Internal server error" });
//     }
// });

// module.exports = userRoute;
const { Router } = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("./UserSchema");

const userRoute = Router();

// Register endpoint
userRoute.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await UserModel.create({ username, password: hashedPassword });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send({ error });
    }
});

// Login endpoint
userRoute.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(401).send("Invalid username or password");
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).send("Invalid username or password");
        }

        // Set username to the cookie
        res.cookie("username", username, { httpOnly: true });
        res.status(200).send("Logged in successfully");
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

// Logout endpoint
userRoute.post("/logout", async (req, res) => {
    try {
        // Remove the cookie from the browser
        res.clearCookie("username");
        res.status(200).send("Logged out successfully");
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = userRoute;

