const http = require("http");
const formidable = require("formidable");

const server = http.createServer((req,res)=>{
       
      if (req.url == "/dosyayukleme") {
              const form = new formidable.IncomingForm();
              form.parse(req, (err, fields, files)=>{
                  res.write("Dosya Yüklendi");
                  res.end();
              })
      } else {

      res.writeHead(200, {"Content-Type":"text/html"});
      res.write('<form action="dosyayukleme" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="yuklenendosya"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
      }
});

const PORT = 5000;

server.listen(PORT, ()=>{
    console.log("Server çalışıyor..")
})