const connectDb = require("./config/database");
const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("hellow server ")

})
async function startServer(){
    await connectDb()
    app.listen(3000,()=>{
        console.log("server is runnig on port 3000")
    })
}


startServer()
