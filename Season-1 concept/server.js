const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url==="/secretdata"){

        res.end("There is no secret Data");
        
    }
    res.end("Hello world");
});
server.listen(7777);//server is created 