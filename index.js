const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello");
})

app.listen(pro.env.PORT||4000,()=>{
    console.log("app is running")
})
