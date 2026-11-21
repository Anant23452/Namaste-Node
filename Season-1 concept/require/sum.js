// mudules protected there  variable and function for leaking 
console.log("sum.js is working ");
function calculate(a,b){
    c= a+b;
    console.log(c);
}
module.exports=calculate;
// calculate();

//  calculate ko  exis nahi kr sakte app.js me 

// two type two export or import  
// 1.cjs(common js modules)
//2. Esm Module [

//export function sum(a,b){

//}
// import{} from" /sum.js"
//
