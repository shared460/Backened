import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
// app.get('/',(req,res)=>{
//     res.send('for jokes go to jokes');
// })

//list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'a joke',
            content: 'this is a joke',
        },{
            id: 2,
            title: 'a joke',
            content: 'this is another joke',
        },{
            id: 3,
            title: 'a joke',
            content: 'this is poor joke',
        },{
            id: 4,
            title: 'a joke',
            content: 'this is nice one',
        },{
            id: 5,
            title: 'a joke',
            content: 'this is metaphor',
        }
    ]

    // it is simple api returning data in json format
    res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(port);
});