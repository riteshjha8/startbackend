// const express = require('express')
import express from 'express';

const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('server is ready')
});

app.get ('/api/joke',(req , res) => {  
    
    const joke =[
{
    id:1,
    title:'a joke',
    content:'this is a joke'
},

{
    id:1,
    title:'another joke',
    content:'this is a another joke'
},

{
    id:1,
    title:'a third joke',
    content:'this is a third joke'
},

 ];
res.send(joke);

});

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
