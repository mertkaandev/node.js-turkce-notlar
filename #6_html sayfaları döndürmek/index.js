const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    if (req.url == "/anasayfa") {
        fs.readFile("./index.html", (err,data)=>{
            if (err) {
                res.write(err);
            } else {
                res.write(data);
            }
        });

}});

const PORT = 5000

server.listen(PORT, ()=> {
    console.log("Server ayağa kalktı..");
});