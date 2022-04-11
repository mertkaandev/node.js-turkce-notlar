const http = require("http");

const server = http.createServer( (req,res)=> {
    res.write("Merhaba Node.js");
    res.end();
});

const PORT = 5000;

server.listen(PORT, ()=> {
    console.log(`Server başarı ile ayağa kalktı..`)
})