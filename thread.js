crypto.pbkdf2("password","salt",50000000,50,"sha512",(err,key)=>{
    console.log("1-crypto done ");
})
crypto.pbkdf2("password","salt",50000000,50,"shah123",(err,key)=>{
    console.log("2-crypto done ");
})
crypto.pbkdf2("password","salt",50000000,50,"shah123",(err,key)=>{
    console.log("3-crypto done ");
})
crypto.pbkdf2("password","salt",50000000,50,"shah123",(err,key)=>{
    console.log("4-crypto done ");
})
// for changing the size of thread in libuv command is 
process.env.UV.THREADPOOL_SIZE=2; 

// 4 comming on same time become libuv have 4 uv thread pool it gave on same time 
// but when we put 5 function then it take time because when one of completed then 5 procced 