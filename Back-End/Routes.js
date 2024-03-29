const express = require('express');
const Joi = require('joi');
const { parkModel } = require("./Schema");
const { Router } = require("express");
const parkRoute = express.Router();
const {UserModel} = require('./UserSchema');
// Define Joi schema for validation
const parkValidationSchema = Joi.object({
    state: Joi.string().required(),
    name: Joi.string().required(),
    location: Joi.string().required(),
    formed: Joi.number().integer().min(1800).max(new Date().getFullYear()).required(),
    notableFeatures: Joi.string().required(),
    fauna: Joi.array().items(Joi.string()).required(),
    floraAndFauna: Joi.array().items(Joi.string()).required(),
    riversAndLakes: Joi.array().items(Joi.string()).required()
}).options({ allowUnknown: true });

parkRoute.use(express.json());

// parkRoute.post('/login', async (req, res) => {
//     // try {
//     //     const user = await UserModel.findOne({ username, password });

//     //     // if (!user) {
//     //     //     return res.status(401).json({ error: 'Invalid username or password' });
//     //     // }

//     //     // // Set username in cookie
//     //     // res.cookie('username', username, { httpOnly: true });
//     //     res.status(200).json({ message: 'Login successful', user });
//     // } catch (err) {
//     //     console.error('Error logging in:', err);
//     //     res.status(500).json({ error: 'Internal Server Error' });
//     // }


//     try{
//         const user = await UserModel.create(req.body)
//         res.status(200).send({msg: "Login successfully..!!!", user})
//     }catch(err){
//         res.status(400).send(err)
//     }
// });


// Logout endpoint
// parkRoute.post('/logout', (req, res) => {
//     try {
//         // Clear username cookie
//         res.clearCookie('username');
//         res.status(200).json({ message: 'Logout successful' });
//     } catch (err) {
//         console.error('Error logging out:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


parkRoute.post("/create", validatePark, async (req, res) => {
    try {
        const prod = await parkModel.create(req.body);
        res.status(200).send({ msg: "Data created successfully", prod });
    } catch (error) {
        res.status(500).json({ errMsg: "Invalid post request", error });
    }
});

parkRoute.get("/read", async (req, res) => {
    try {
        const data = await parkModel.find();
        res.status(200).send({ msg: "Data received", data });
    } catch (error) {
        res.status(500).json({ errMsg: "Invalid get request", error });
    }
});

// update a park
parkRoute.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const park = await parkModel.findByIdAndUpdate(id, req.body);

        if (!park) {
            return res.status(404).json({ message: "Park not found" });
        }

        const updatedPark = await parkModel.findByIdAndUpdate(id);
        res.status(200).json(updatedPark);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// delete a park
parkRoute.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const park = await parkModel.findByIdAndDelete(id);

        if (!park) {
            return res.status(404).json({ message: "Park not found" });
        }

        res.status(200).json({ message: "Park deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

function validatePark(req, res, next) {
    const { error } = parkValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

module.exports = { parkRoute, parkValidationSchema };
