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
// function validatePark(req, res, next) {
//   const { error } = parkValidationSchema.validate(req.body);
//   if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//   }
//   next();
// }

// app.use((err, req, res, next) => {
// console.error(err.stack);
// res.status(500).json({ message: 'Something went wrong!' });
// });



//routes
app.use("/api", parkRoute);

app.use("/admin", userRoute);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

app.listen(port, () => {
  console.log("Server is running");
});