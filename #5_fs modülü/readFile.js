const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    fs.readFile("./document.txt", (err,data)=> {

       if (err) {
          res.write(err);
       } else {
          res.end(data);
       }});
    
    });

const PORT = 5000

server.listen(PORT, ()=> {
   console.log("Server ayağa kalktı..");
});