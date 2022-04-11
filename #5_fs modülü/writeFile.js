const http = require("http");
const fs = require("fs");
const data = "Merhaba Node.js. Bu benim dosyaya yazdırmak istediğim cümlemdir."

const server = http.createServer((req,res)=>{

    fs.writeFile("document.txt", data, (err)=> {

        if (err) {
           res.write(hata)
        } else {
           res.end(data);
     }});

});

const PORT = 5000

server.listen(PORT, ()=> {
    console.log("Server ayağa kalktı..")
})