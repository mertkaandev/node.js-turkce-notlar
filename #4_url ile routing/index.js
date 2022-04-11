const http = require("http");

const server = http.createServer((req,res)=>{
      if (req.url == "/anasayfa") {
          res.write("Anasayfaya Hoşgeldiniz")
          res.end();
      } else if (req.url == "/iletisim") {
          res.write("İletişim Sayfasına Hoşgeldiniz")
          res.end();
      } else if (req.url == "/hakkimizda") {
          res.write("Hakkımızda sayfasına hoşgeldiniz")
          res.end();
      };
});

const PORT = 5000;

server.listen(PORT, ()=>{
       console.log("Server ayağa kalktı..")
});