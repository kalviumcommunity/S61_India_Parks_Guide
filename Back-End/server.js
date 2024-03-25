// const express=require('express');
// const mongoose=require('mongoose');
// const port=process.env.PORT || 8000;
// require('dotenv').config();
// const {parkRoute} =require('./Routes');
// const app=express();
// mongoose.connect(process.env.MONGODB_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })
// .then(()=>console.log('Connectedto MongoDB'))
// .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//     process.exit(1); 
// });

// app.use(express.json());


// app.use('/api',parkRoute);
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });





const express = require("express");
const connectDB = require("./config/db"); `1`
const { parkRoute } = require("./Routes");
connectDB();
const cors=require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({
  origin:'http://localhost:5173'
}))
app.get("/", (req, res) => {
  res.send("pong");
});


//routes
app.use("/api", parkRoute);

app.listen(port, () => {
  console.log("Server is running");
});