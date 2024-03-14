require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const port=process.env.PORT || 3000;

const app=express();
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('Connectedto MongoDB'))
.catch((err)=>console.error('Error connecting to MongoDB:',err));

app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to the HomePage',
        database:mongoose.connection.readyState===1?'connected':'disconnected'
    });
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});