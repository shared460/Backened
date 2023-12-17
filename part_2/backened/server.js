import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.get('/',(req,res)=>{
    res.send('server is ready');
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(port);
});