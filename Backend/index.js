const express = require("express");
const app = express()

app.get('/',(req,res)=>{
    res.send("hello from server")
})

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`The server is running on the port http://localhost:${PORT}`)
})