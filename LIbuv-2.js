const fs =require("fs");
const a =133;

setImmediate(()=>{
    console.log("Set Immediate");
})

Promise.resolve().then(()=>{
    console.log("Promise Resolved");
})


fs.readFile("./file.txt","utf8",(err,data)=>{
   setTimeout(() => {
    console.log("2nd send time out");
   }, 0);
   setImmediate(()=>{
    console.log("2nd Immediate");
   })
   process.nextTick(()=>{
    console.log("Process next 2 ");
   })
   console.log("SEcond text is running ");
})


setTimeout(() => {
    console.log("Time expired");
}, 0);


function print(){
    console.log("Function printed");
    console.log("a=",a);
}

process.nextTick(()=>{
    console.log("process next Tick is excuted ");
})

print()
console.log("Last line of the file ");

//output
// 1. function printed
// 2. a=133;
// 3. Time expired 
// 4. Set Immediate 
// 5. File readed--it take time to read file 