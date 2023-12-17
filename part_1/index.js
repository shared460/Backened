// using commonjs here
const express = require('express');
require('dotenv').config();
// making pathways or lines of req and res
const app = express();
const port = process.env.PORT;


// this is req and res lines in which / is response line
// listening an / route
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/twitter',(req,res)=>{
    res.send('this is twitter page response');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login here</h1>')
})

app.get('/google',(req,res)=>{
    res.send('<h2>https://www.google.com/</h2>')
})

// we are listening on port 3000
app.listen(port, ()=>{
    console.log(`listening port ${port}`);
})
