const http = require("http");
const Data = require("./data.js");

http
  .createServer((req, resp) => {
    resp.writeHead(200, "Contant-type", "Application/json");
    const data = { name: "Himanshu", marks: 350, course: "Btech" };
    resp.cork();
    resp.end(JSON.stringify(Data.modules.data));
  })
  .listen(3000);
