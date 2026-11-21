const connectDb = require("./config/database");
const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("hellow server ")

})


connectDb()
.then(()=>{
    console.log("database connected successfully")
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    })
})
.catch((err)=>{
    console.log("error while connectiing to database",err)
})

