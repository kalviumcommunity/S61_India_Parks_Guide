const express = require("express");
const connectDB = require("./config/db"); `1`
const { parkRoute } = require("./Routes");
connectDB();
const cors=require('cors');
const userRoute = require("./UserRoutes");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("pong");
});

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // Allow credentials (cookies)
}));


//routes
app.use("/api", parkRoute);

app.use("/admin", userRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log("Server is running");
});