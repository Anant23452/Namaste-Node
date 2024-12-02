const fs =require("fs");
const https=require("https");

console.log("Hello");

var a =345323;
var b = 542313;

setTimeout(()=>{
    console.log("Set time out is running ")

},2000)
//synchronous code 
fs.readFileSync("./file.txt","utf8");
// Async code (non blocking i/o )
fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File DAta :",data);
})

function multiplly(){
    const c = a*b;
    console.log(c);
}
multiplly();