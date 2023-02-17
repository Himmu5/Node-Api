const http = require('http');

http.createServer((req , res)=>{
    res.write(200,"hellow i am Himanshu");
    res.end();
}).listen(4000);

