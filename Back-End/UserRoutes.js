const express = require("express");
const { Router } = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("./UserSchema");
const userRoute = express.Router();
const jwt = require("jsonwebtoken");
// Register endpoint
userRoute.post("/register", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if(user){
        res.status(501).send({msg: "User already exists."})
    }else{

        bcrypt.hash(req.body.password, 6, async (err, hash) => {
            const newUser = await UserModel.create({...req.body, password: hash})
            res.status(200).send({msg: "Registration successfull..!!!", newUser})
        });
        
    }
  } catch (error) {
    res.status(400).send({ error });
  }
});

// Login endpoint
userRoute.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({username: req.body.username})

    bcrypt.compare(req.body.password, user.password, async (err, result)=>{
        if(result){
            const token = jwt.sign({_id:user._id}, 'kalvium', {expiresIn: "30m"})
            res.status(200).send({"Success": "Logged in Successfully", token})
        }else{
            res.status(501).send({"failed": "Wrong credentials."})
        }
    })

  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Logout endpoint
userRoute.post("/logout", async (req, res) => {
    try {
      res.clearCookie("token"); // Clear the "token" cookie
      res.status(200).send("Logged out successfully");
    } catch (error) {
      res.status(500).send({ error: "Internal server error" });
    }
  });
  

module.exports = userRoute;
