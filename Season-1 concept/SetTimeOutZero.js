console.log("Set time out is running");
setTimeout(() => {
    console.log("Call me after 2 second");
}, 2000);
setTimeout(() => {
    console.log("Call me After 0 second");
}, 0);

function multiply(){
    var a =5;
    var b =394;
    var result = a*b;
    console.log(result);
}
multiply()