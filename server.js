const express=require('express');
const app=express();
const port=3000;

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something wrong...');
});

app.get('/ping',(req,res)=>{
    res.send("pong");
});

app.get('/test',(req,res)=>{
    res.send("test response");
});

app.get('/error',(req,res,next)=>{
    next(new Error('Testing error handling'));
});

app.listen(port,()=>{
    console.log(`App running on port: ${port}`)
    
});

