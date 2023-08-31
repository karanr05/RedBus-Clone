const express = require('express');
const app = express()

//Route 

app.get('/',(req,res) => {
    res.send("Hello World");
})


app.listen(3000, () => {
    console.log("Server running in port 3000");
})