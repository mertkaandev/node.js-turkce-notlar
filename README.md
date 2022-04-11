## Node.js

### İçindekiler 
 1. [Node.js](https://github.com/mertkaandev/node.js-tutorial/tree/main#1-nodejs)
 2. [Node.js İndirmek](https://github.com/mertkaandev/node.js-tutorial/tree/main#2-nodejs-i%CC%87ndirmek)
 3. [Node.js Yazımı ve Node.js Dosyası Çalıştırma](https://github.com/mertkaandev/node.js-tutorial/tree/main#3-nodejs-yaz%C4%B1m%C4%B1-ve-nodejs-dosyas%C4%B1-%C3%A7al%C4%B1%C5%9Ft%C4%B1rma)
 4. [Node.js Modül-Paket Kavramı](https://github.com/mertkaandev/node.js-tutorial/tree/main#4-nodejs-paket-mod%C3%BCl-kavram%C4%B1)
 5. [Node.js Modülleri](https://github.com/mertkaandev/node.js-tutorial/tree/main#5-nodejs-mod%C3%BClleri)
 6. [Node.js Server Kurulumu ve HTTP Modülü](https://github.com/mertkaandev/node.js-tutorial#6-nodejs-server-kurulumu-ve-http-mod%C3%BCl%C3%BC)
 7. [Node.js URL ile Routing](https://github.com/mertkaandev/node.js-tutorial#7-nodejs-url-ile-routing)
 8. [Node.js FS Modülü](https://github.com/mertkaandev/node.js-tutorial#8-fs-mod%C3%BCl%C3%BC)
 9. [Node.js FS Modülü ile HTML Sayfası Döndürmek](https://github.com/mertkaandev/node.js-tutorial/tree/main#9-fs-mod%C3%BCl%C3%BC-ile-html-sayfas%C4%B1-d%C3%B6nd%C3%BCrmek)
 10. [Node.js NPM](https://github.com/mertkaandev/node.js-tutorial/tree/main#10-npm)
 11. [Node.js NPM ile Package.json Dosyası İndirmek](https://github.com/mertkaandev/node.js-tutorial/tree/main#11-npm-ile-packagejson-dosyas%C4%B1-i%CC%87ndirmek)
 12. [Node.js NPM ile Nodemon Modülü Yüklemek](https://github.com/mertkaandev/node.js-tutorial/tree/main#12-npm-ile-nodemon-y%C3%BCklemek)
 13. [Node.js Formidable Modülü ile Dosya Yüklemek](https://github.com/mertkaandev/node.js-tutorial/tree/main#13-formidable-mod%C3%BCl%C3%BC-ile-dosya-y%C3%BCklemek)
 14. [Node.js Node Mailer ile Mail Göndermek](https://github.com/mertkaandev/node.js-turkce-kaynak#14-nodemailer-ile-mail-g%C3%B6ndermek)
 15. [Node.js Event Emitter](https://github.com/mertkaandev/node.js-tutorial/tree/main#15-event-emitter)
---
### 1. Node.js

Node.js, Javascript kodlarını back-end tarafında çalıştırmamızı sağlayan açık kaynak kodlu bir çalışma sunucu ortamı/çalışma zamanı ortamıdır (run-time platform). Node.js'den önce Javascript sadece tarayıcılarda çalışabilen bir betik diliydi fakat 2009'da Ryan Dahl, Node.js'i açık kaynak kodlu olarak duyurdu ve Javascript sadece tarayıcılarda çalışabilir olmaktan çıkıp back-end (sunucu) taraflı çalışabilir hale geldi. Node.js ile birlikte artık Javascript dilini kullanarak dosya okuma, veritabanı bağlantısı gibi sunucu taraflı işler yapabiliyoruz. Node.js ücretsizdir ve çeşitli işletim sistemleri üzerinde çalışabilir (Windows, Linux, Mac OS).
 
Node.js'i şu sebeplerden tercih edebilirsiniz:

+ Node.js, Google'un V8 motoru üzerinde inşa edilmiştir. V8 motoru Javascript kodlarını makine koduna çevirir. V8 Motoru ile birlikte Javascript yüksek performanslara ulaşır. 

`Javascript codes -> V8 Engine -> Machine Codes`

+ Node.js, event loop/olay güdümlüdür. Aslında Javascript single-thread ve asenkron yapıda çalışan bir programlama dilidir. Javascript single-thread çalıştırma yaptığı için çalıştırdığı eventleri ve callbackleri sıraya sokarak hepsini tek bir thread ile işler. Bahsedilen eventlerin ve callbacklerin sırada tutulduğu yapı, basit bir kuyruk (Queue) mekanizmasıdır. Thread’in her defasında kuyruktaki ilk event’i işleyip yeni bir event alması da event loop olarak adlandırılır.
 
+ Node.js, asenkron yapıdadır ve non blocking/bloklamasızdır. Asenkron programlamanın zıttı senkron programlamada kodlar sırayla işlenirler ve birbirlerini beklerler. Bir işlemin başlaması kendinden önceki satırdaki işlemin bitmesiyle gerçekleşir. Bu sebeple senkron programlamada aşağıdaki gibi bir kod yapısı işlemler birbirini bekleyeceği için toplam bitiş süresi 23 saniye olacaktır.

```
fonksiyon1();     -> 5 saniye sürüyor.
fonksiyon2();     -> 8 saniye sürüyor.
fonksiyon3();     -> 10 saniye sürüyor.

toplam bitiş süresi: 23 saniye
```

Fakat asenkron programlamada ise işlemler sırayla gerçekleşmek zorunda değildir ve bir işlemin başlaması diğerinin bitmesine bağlı değildir. İşlemlerin toplam bitiş süresi azdır. Aşağıdaki kod yapısında asenkron programlama yapılırsa fonksiyon2'nin başlaması fonksiyon1'in bitmesine bağlı olmayacaktır. Fonksiyon1() bitmeden fonksiyon2() çalışabilir. Fonksiyon3()'de fonksiyon2() bitmeden çalışabilir. Bu sebeple toplam bitiş süresi 15 saniye olabilir.

```
fonksiyon1();      -> 15 saniye sürüyor.
fonksiyon2();      -> 7 saniye sürüyor.
fonksiyon3();      -> 9 saniye sürüyor.

toplam bitiş süresi: 15 saniye
```

+ Node.js içinde dağıtılan belli kütüphaneler sayesinde içinde bir ek sunucu yazılımına gerek duymadan sunucu görevi üstlenir. 

+ Node.js ile birlikte hem önyüzde hem arka yüzde farklı diller kullanmadan, sadece Javascript kullanarak full stack geliştirme yapılabilir. 

+ Node.js'in güçlü bir geliştirici topluluğu vardır.

+ Node.js, NPM isimli paket yöneticisi kütüphanesine sahiptir. Yapacağınız birçok iş için en baştan kod yazmak yerine NPM kütüphanesinden daha önce yazılmış kod bloklarını indirebilir ve projenize dahil edebilirsiniz. NPM, paketlerini açık kaynak olarak paylaşan developerlar tarafından her gün büyütülen devasa bir paket ağıdır.
 
---

### 2. Node.js İndirmek

Node.js https://nodejs.org adresinden indirilir. Güncel olarak son sürüm olan 16.14.2 LTS'i indirin ve kurulumunu yapın. İndirdikten sonra cmd'i açın ve `node` yazın. Hata vermezse Node.js bilgisayarınıza yüklenmiştir. Node.js'in güncel sürümünü kontrol etmek için yine terminal üzerinden `node -v` komutunu girin. Size Node.js'in hangi sürümünü kullandığınızı gösterecektir.

![node0](https://user-images.githubusercontent.com/101933251/162569648-a3a95578-ae91-4f9e-8f34-e91fa2ea7e16.JPG)

Node.js indirildikten sonra artık JavaScript kodları makine üzerinde çalışır hale gelir ve terminalden uzantısı .js olan dosyalar çalıştırılabilir.

---

### 3. Node.js Yazımı ve Node.js Dosyası Çalıştırma

Node.js, dil olarak Javascript'i kullanır ve yazdığınız tüm Javascript kodlarını çalıştırır. Ancak Node.js yazarken ES6 standartlarına uygun şekilde Javascript kodları yazmaya dikkat gösterin. (Eğer ES6 hakkında bilginiz yoksa Javascript ES6 üzerine bilgi edinin). 

1. Node.js dosyalarının uzantısı .js'dir, bu sebepten Node.js ile çalışırken uzantısı .js olan dosyalar oluşturun. 
2. Başlangıç olarak masaüstünde bir çalışma klasörü oluşturun ve içinde `index.js` isminde bir dosya oluşturun. 
3. Oluşturduğunuz dosyayı Visual Studio Code gibi bir kod editörüyle açın. 
4. Ardından index.js dosyası içine çalıştırmak istediğiniz Javascript kodlarını yazın. 
5. Örnek olarak şu kodları yazdım ve siz de yazıp çalıştırabilirsiniz (Kodlar Javascript ES6 standartlarına uygun olarak yazılmıştır. `const` değişkeni kullanılmıştır ve ES6'da `Template Literals` olarak geçen, değişkenlerin değerlerini kullanmamızı sağlayan `${}` kullanılmıştır).

![node1](https://user-images.githubusercontent.com/101933251/162569735-155ed7f0-a6b7-43e2-baa9-c415950e2073.JPG)

```
const calisan = {
    isim: "Mert",
    soyad: "Kaan",
    is: "Web Developer",
    maas: "8000",

}

const calisanBilgi = `Çalışanın adı ve soyadı ${calisan.isim + " " + calisan.soyad}. ${calisan.is} olarak çalışıyor ve ${calisan.maas} tl maaş alıyor.`

console.log(calisanBilgi)
```

6. Ardından yazdığınız kodları çalıştırmak için terminali açın ve önce `node`, ardından çalıştıracağınız dosyanın ismi olan `index.js`'i yazın ve enter'a basın:

![node2](https://user-images.githubusercontent.com/101933251/162569154-9ead158e-3594-414d-be2b-b8f0adafd009.JPG)

7- Bu komutun ardından Node.js dosyanızı çalıştıracaktır. Artık Javascript kodlarınız Node.js sayesinde konsolda da çalışıyor olacaktır:

![node3](https://user-images.githubusercontent.com/101933251/162569549-cc0937c5-7e71-4247-946f-4dec38126bb0.JPG)

---

### 4. Node.js Paket-Modül Kavramı

Paket bir veya birden fazla Javascript dosyasına yazılmış, belli görev ve işlevleri yerine getiren kod blokları anlamına gelir ve modül olarak da adlandırılır. Her paketin kodları kendisi için oluşturulmuş klasörün içindeki dosyalarda tutulur. Node.js geliştiricileri başka geliştiricilerin yazmış oldukları paketleri kullanabilirler ya da kendi paketlerini de yazıp kullanabilirler. Geliştiriciler `Express.js` veya `Nodemon.js` gibi başka geliştiricilerin yazıp kullanıma sundukları paketleri -bu tür paketlere 3. parti yazılım diyoruz- kendi uygulamalarında kullanmak istedikleri zaman önce NPM denilen paket yöneticisi ile bu paketleri uygulamalarına terminalden `npm install paketAdi` komutuyla indirirler, ardından indirdikleri paketi bir değişken oluşturup `require()` ile çağırarak kullanırlar. Aşağıdaki kod uygulamaya `Express.js` paketini dahil eder (Express.js'in uygulamaya indirilmiş olması şartıyla).

`const express = require("express")`

**Kendi Modülünü Yazmak**

1. Kendi paketinizi yazıp kendi uygulamanızda kullanmak istiyorsanız öncelikle paketi-kodu yazacağınız farklı bir .js uzantılı dosya açın. 
2. Ardından yazdığınız kod bloğunu çıkarmak için `module.exports = {}` kodunu kullanın. Aşağıdaki örnek yazılmış basit bir paketi ve nasıl export edildiğini gösterir.

![node6](https://user-images.githubusercontent.com/101933251/162572890-c2f65045-3bcf-4b6a-acd6-2b9586caba46.JPG)

```
const sehirler = ["İstanbul", "Ankara", "İzmir"];

module.exports = {
    sehirler
}
```

3. Şimdi bu kodu kullanmak istediğiniz dosyaya gidin ve bir değişken oluşturarak `require()` ile çağırın. Require parametre olarak dosya yolunu alır. O sebepten çıkarttığınız kodun bulunduğu dosyanın yolunu verin:

`const sehirler = require("./myModule.js");`

4. Şimdi kodu istediğiniz şekilde kullanın ve çalıştırın. Örnek olarak `console.log()` koduyla konsola yazdırın: 

![node7](https://user-images.githubusercontent.com/101933251/162572999-bdd56058-6fca-4387-9aa0-74a61df42db4.JPG)

```
const sehirler = require("./myModule.js");

console.log(sehirler);
```

5. Terminale `node index.js` yazarak dosyayı çalıştırın ve çıktıya bakın:

![node8](https://user-images.githubusercontent.com/101933251/162573027-42680514-2768-4a2e-b041-9a7dc0b51aee.JPG)

---

### 5. Node.js Modülleri

Node.js'de çekirdek, yerel ve üçüncü parti olmak üzere 3 çeşit modül tipi bulunur:

1- Çekirdek Modüller: Node.js indirildiğinde onunla beraber yüklenmiş olarak gelen modüllere çekirdek modüller denir. Herhangi bir ek yüklemeye gerek olmadan direk `require()` ile çağrılıp Node projesinde kullanılabilirler. "http", "fs", "path", "url", "querystring", "utl" gibi modüller çekirdek modüllerdir.

```
http:	HTTP sunucu işlemleri için kullanılır. En önemli çekirdek modüldür. Node.js bu modül üzerine inşa edilmiştir.
fs:	Dosya işlemleri için kullanılır. Dosya okuma, dosya silme gibi işlemler yapılabilir.
path:	Dosya işlemlerinde kullanmak için yardımcı fonksiyonları içerir.
url:	URL işlemleri için kullanılır.
querystring:	URL istekleri için kullanılır.
util:	Çeşitli yardımcı fonksiyonları içerir.
```

2- Yerel Modüller: İhtiyaçlara göre geliştiricinin kendi yazdığı modüllere denir. Geliştirici kendi yazdığı modülü bulunduğu dosyadan `module.exports = { moduleName }` koduyla çıkarıp başka dosyalarda kullanabilir. Bir önceki kısımda bunun bir örneğini gördük.

3- Üçüncü Parti Modüller: Geliştiriciler Node.js'nin çekirdek modüllerini yetersiz bulduğunda veya belli işlemler için belli kod bloklarına ihtiyaç duyduklarında bunları kendileri yazmak yerine başka geliştiricilerin yazıp açık kaynak kodlu olarak kullanıma sundukları 3. parti yazılımları/modülleri kendi uygulamalarına indirip kullanabilirler. Bunun için NPM dediğimiz paket yöneticisi kullanılır. Bu sayede uygulamanın yapım aşaması hızlanmış olur. 

---

### 6. Node.js Server Kurulumu ve HTTP Modülü

**HTTP**: Bilgisayar ağlarında iletişimin sağlanabilmesi ve trafiğin yönlendirilebilmesi için her katmana özel belli protokoller vardır. Bunlardan birisi olan HTTP (Hyper Text Transfer Protocol) en üst katmandaki protokoldür. HTTP, server (sunucu) ve tarayıcı arasındaki iletişimi sağlayan protokoldür. Bir istemci (kullanıcı), bir web sayfasına isteklerde (request) bulunduğunda aslında web sayfasının sunucusundan isteklerde bulunur ve sunucu isteklere cevap (response) döner. Bu iletişim biçimi de HTTP'ye uygun gerçekleşir. Bu sebeple sunucu taraflı kodlamalar yapılırken HTTP'ye uygun komutlar yazılır. Örneğin GET komutu sunucudan dosya getirmek için kullanılır.

![request response](https://user-images.githubusercontent.com/101933251/162616489-e4a53d6f-382f-4fa0-8868-9e3fa28ebf73.jpg)

**Node.js'de HTTP Modülü ile ile Sunucu Oluşturmak**

Node.js'de HTTP işlemlerini gerçekleştirebilmek için HTTP çekirdek modülü vardır. HTTP modülü ile birlikte PHP'de olduğu gibi (PHP, Apache Sunucu yazılımına ihtiyaç duyar) ek bir sunucu yazılıma ihtiyaç duyulmadan uygulamanın kendi bünyesinde sunucu kurulabilir ve yönetilebilir. Buna ek olarak Express gibi NPM paketleri uygulamaya dahil edilerek de daha basit ve hızlı şekilde sunucu oluşturulabilir. Bu geliştiricinin tercihine bağlıdır. HTTP modülünü kullanarak sunucu oluşturmak için önce uygulamanın çalıştırılacağı ana dosya (entry point olarak da bilinir) oluşturulur. İsmine ise genellikle index.js veya server.js verilir. Çalışma klasörünüzde index.js dosyası açın ve sunucu oluşturmaya başlayalım.

1. İlk olarak http değişkeni oluşturulur ve oluşturulan değişkene `require()` fonksiyonu ile http modülü dahil edilir.

`const http = require("http");`

2. Ardından server kurulumu gerçekleştirilir. Server ismine sahip bir değişken oluşturulur. Değişkene değer olarak oluşturduğumuz http değişkeni ve ardından createServer() fonksiyonu verilir `http.createServer()`. createServer() fonksiyonu serveri oluşturur ve içinde 2 parametre barındıran bir callback fonksiyonu `()=>{}` alır. Bu parametreler `request` ve `response` nesneleridir. Request istek anlamına gelir ve istemciden (kullanıcı) gelen isteği bir nesne (http.IncomingMessage nesnesi) olarak temsil eden parametredir. Response ise cevap anlamına gelir ve isteğe karşılık sunucunun vereceği yanıtı temsil eder. Response olarak birçok şey dönebilirsiniz: HTML Sayfası, JSON Objesi, Status Kodları gibi.. Aşağıdaki kodda `res.write()`da `res` yanıttır, `write()` ise web sayfasına yazı yazdıran fonksiyondur. `res.end()` ise cevabın bittiğini belirtir.

```
const http = require("http");

const server = http.createServer((req,res)=>{
      res.write("Merhaba Node.js");
      res.end();
});
```

3. Serveri oluşturduktan sonra dinleme işleminin yapılacağı PORT belirtilir. Port, 3000 ya da 5000 gibi değerler alabilir. Önemli olan dinlecek Port'un boş olmasıdır. Port'u bir değişken yaratarak oluşturabilirsiniz.

```
const http = require("http");

const server = http.createServer((req,res)=>{
      res.write("Merhaba Node.js");
      res.end();
});

const PORT = 5000;
```

4. Son olarak oluşturulan server'a `listen()` fonksiyonu çağrılır. `listen()` fonksiyonu iki parametre alır: Birincisi port değeri, ikincisi bir callback fonksiyonudur `()=>{}`. Eğer bir hata olmazsa callback fonksiyonu çalışacak ve konsola "Server ayağa kalktı.." yazdıracaktır.

```
const http = require("http");

const server = http.createServer((req,res)=>{
      res.write("Merhaba Node.js")
      res.end();
});

const PORT = 5000;

server.listen(PORT, ()=>{
       console.log("Server ayağa kalktı..")
});
```


![node 12](https://user-images.githubusercontent.com/101933251/162575884-d454500b-34f2-4fb9-aeff-b448b5218a2c.JPG)

5. Artık sunucuyu çalıştırabilirsiniz. Terminali açın ve `node index.js` yazın. Hata oluşmazsa konsolda şu çıktıyı alacaksınız:

![node 11](https://user-images.githubusercontent.com/101933251/162575782-d4b00a92-4842-416c-adc2-95a814733e41.JPG)

6. Ardından tarayıcınızda `localhost:5000` adresine gidin. Web sayfanızda oluşturduğunuz sunucudan gönderdiğiniz response değerini göreceksiniz:

![node10](https://user-images.githubusercontent.com/101933251/162575683-c05dbe63-e20b-4ee1-80ae-c038707a4006.JPG)

**HTTP Header**

Sunucu response döndürürken `writeHead()` ile statü kodları/içerik tipi de döndürebilir. `writeHead()` iki parametre alır: İlk parametre statü kodudur ve bunlar 200, 404 gibi HTTP durum kodlarıdır, ikincisi ise response olarak gönderilen içeriğin tipidir. Eğer response olarak HTML döndürmüşseniz ikinci parametrede response'un HTML olduğunu iletebilirsiniz. Aşağıdaki kodda response olarak HTML kodları döndürülmüştür ve `writeHead()` fonksiyonu içinde ilk önce `200 OK` statü kodu, ikinci olarak içeriğin HTML olduğunu belirten `{'Content-Type' : 'text/html'}` döndürülmüştür.

```
const server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type' : 'text/html'})
  res.write("<h3>Merhaba Node.js<h3>")
  res.end()
});
```
---

### 7. Node.js URL ile Routing

`req.url`: Node.js'de url isteklerini yönetmek için `req.url` kullanılır. Node.js'de `req` bir nesnedir ve `req` nesnesi, url'de alan adından sonra gelen kısmı tutan `url` adında bir özelliğe sahiptir. `req.url` ile birlikte if bloklarını kullanarak web sayfanız için `/anasayfa`, `/iletisim`, `/hakkimizda` gibi url'ler oluşturup bu url'lere yönlendirmeler yapabilirsiniz. Daha gelişmiş yönlendirmeler için switch-case yapısı ile birlikte `path` modülü kullanılır. Şimdilik bu istek yönlendirmelerini if blokları ile yapabilirsiniz. İstek yönlendirmeleri `req` ve `res` parametrelerini almış `server` değişkeni içinde yapılır. Aşağıdaki kodda belli url'lere istek atılmış ve ardından o url'ler için belirtilen responselar dönmüştür.

```
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

});`
```

Kodu terminalde çalıştırdıktan sonra `localhost:5000/anasayfa` adresine gidin. İstek yönlendirmelerinin ve ona karşılık yazılmış response'un döndüğünü göreceksiniz.

![image](https://user-images.githubusercontent.com/101933251/162617205-bf6f7f39-4b32-41e3-a80e-2a561e96d745.png)

**URL Parçalama**

Node.js'de URL parçalama işlemleri `url` modülü ile yapılır. Daha sonra buraya anlatımı eklenecektir.

---

### 8. FS Modülü

**FS Modülü**: Dosya okumak, dosya yazmak veya dosya silme amaçlı kullanılır. Fs modülüde tıpkı HTTP modülü gibi Node.js ile birlikte beraber iner ve Node.js üzerinde tanımlıdır. 

**FS Modülü ile Dosya Okuma İşlemi**

1. FS modülünü kullanacağınız dosya içinde require edin.

`const fs = require("fs")`

2. Dosya okuma işlemi için öncelikle okunacak dosyayı oluşturun. Bu herhangi bir dosya olabilir. Ben örnek olması açısından içinde "Node.js Deneme" yazan bir document.txt dosyası oluşturdum. 

![node readfile](https://user-images.githubusercontent.com/101933251/162617826-7a32b27a-9dd3-45dd-add6-dba9a9e493c0.JPG)

3. Ardından `fs` ile birlikte `readFile()` fonksiyonunu kullanın. `readFile()` fonksiyonu parantez içinde iki parametre alır. Birinci parametre dosya yoludur `"./deneme.txt"`, ikinci parametre içinde `err` ve `data` parametrelerini alan callback fonksiyonudur `()=>{}`. `err` ve `data` parametrelerini almış callback fonksiyonunda bir hata bulunursa hata yazdırılacak, hata olmazsa data yazdırılacaktır (Terminalden dosyayı çalıştırmayı unutmayın):

```
const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    fs.readFile("./document.txt", (hata,data)=> {

       if (hata) {
          res.write(hata);
       } else {
          res.end(data);
       }});
    
    });

const PORT = 5000

server.listen(PORT, ()=> {
    console.log("Server ayağa kalktı..");
});
```

Sonuç:

![node readfile +](https://user-images.githubusercontent.com/101933251/162618010-0831b745-473f-4768-a0e2-b4925052d771.JPG)


**FS Modülü İle Dosyaya Yazı Yazdırmak**

1. FS modülünü kullanacağınız dosya içinde require edin.

`const fs = require("fs")`

2. Dosyaya yazı yazdırma işlemi için yazdıracağınız veriyi bir değişken oluştararak içinde belirtin:

`const data = "Merhaba Node.js. Bu benim dosyaya yazdırmak istediğim cümlemdir."`

3. `fs` ile birlikte `writeFile` fonksiyonunu kullanın. `writeFile()` fonksiyonu içinde üç parametre alır. Birinci parametre içine yazı yazdırılacak dosyanın adı `./document.txt`, ikinci parametre yazılacak veri `data`, üçüncü parametre hata oluşursa dönmesi için içine err parametresi alan bir callback fonksiyonudur `()=>{}`.

```
const http = require("http");
const fs = require("fs");
const data = "Merhaba Node.js. Bu benim dosyaya yazdırmak istediğim cümlemdir."

const server = http.createServer((req,res)=>{

fs.writeFile("document.txt", data, (err)=> {
   if (err) {
      res.write(err)
   } else {
      res.end(data);
   }});

});

const PORT = 5000

server.listen(PORT, ()=> {
    console.log("Server ayağa kalktı..")
})
```

Sonuç:

![node sonuc](https://user-images.githubusercontent.com/101933251/162618450-920d48ad-2e56-49d9-87e0-40daf1ef3063.JPG)

---

### 9. FS Modülü ile HTML Sayfası Döndürmek

1. Döndürmek istediğiniz HTML sayfasını oluşturun:

![node html](https://user-images.githubusercontent.com/101933251/162619145-747b2acd-e419-4873-8ae5-0a8eaee45a9c.JPG)

2. Ana dosyada `fs` modülünü dahil edin.

`const fs = require("fs")`

3. `readFile()` fonksiyonunu kullanın ve yönlendirmelere göre sayfalar döndürün:

```
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
``` 

Sonuç:

![node html sonuc](https://user-images.githubusercontent.com/101933251/162619376-1f60d15a-8852-4268-8ab5-e23e290f1b34.JPG)


FS Modülü ile dosya silmek gibi birçok işlem daha yapılabilir. Daha fazlası için `fs` modülünü araştırın. 

---

### 10. NPM

NPM açılımı Node Package Manager'dir. Node.js indirildiğinde onunla beraber iner. Uygulamalara 3. parti yazılımları yüklemeyi sağlar. Bu yazılımlar "modül" ve "paket" olarak da isimlendirilirler. 3. kişiler tarafından açık kaynak olarak geliştirilen modüller NPM sayesinde paketlenip diğer geliştiriciler tarafından kullanılır hale getirilirler ve geliştiriciler ihtiyaçlar dahilinde bu modülleri projelerine indirip kullanabilirler. En çok indirilen paketler `Express.js`, `Nodemon`, `Dotenv` gibi paketlerdir. NPM paketleri terminalden indirilir. 

---

### 11. NPM ile Package.json Dosyası İndirmek

**Package.json**: Geliştirilen uygulama hakkında bilgileri tutan bir dosyadır. JSON formatındadır ve içindeki bilgiler key-value şeklinde tutulur `{ name: backendapi }`. 

Package.json dosyası indirmek için iki komut vardır:

`npm init`       : Package.json dosyasını oluşturur fakat uygulama bilgilerinin geliştirici tarafından girilmesi istenir. 

`npm init -y`    : Package.json dosyasını default değerlerle oluşturur.

![package jsonn](https://user-images.githubusercontent.com/101933251/162620352-4fd39e52-c90d-43b4-8160-0be983327019.JPG)


Package.json dosyası içinde şu bilgileri ve daha fazlasını tutar:

`name: uygulama adı`

`version: uygulama sürümü`

`description: uygulama açıklaması`

`author: geliştirici adı`

`dependencies: uygulama bağımlılıkları`

`repository: uygulama github repo adresi `

`main: uygulama entry point dosyası adı (server.js veya app.js gibi)`

`scripts: uygulama kurulumu işlemleri` 

`license: lisans / MIT`

![image](https://user-images.githubusercontent.com/101933251/162620282-f07ae6a6-f980-458e-93ef-c6933c0b863a.png)

---

### 12. NPM ile Nodemon Yüklemek

**Nodemon**: Node.js projelerinde geliştirme yaparken yapılan her değişiklikten sonra değişikliklerin çalışması için `node dosyaadi` komutuyla server yeniden çalıştırılır. Ancak `nodemon` paketi sayesinde dosyalarda her değişiklik yaptığımızda Nodemon yaptığımız değişiklikleri algılayıp kendisi serveri bizim için baştan başlatır. Kısaca Nodemon serveri durdurmadan sürekli çalıştırır.

+ Nodemon'u indirmek için terminalden şu komutu girin:

`npm install nodemon`

+ Nodemon'un bir bağımlılık olduğunu belirtmek için Package.json dosyasına kaydetmek istediğinizde `--save` komutunu da kullanın:

`npm install --save nodemon`

+ Nodemon'u uygulamaya değil de bilgisayara global olarak indirmek için şu komutu girin:

`npm install nodemon -g`

+ Nodemon'u indirdikten sonra çalıştırmak için önce `nodemon`, ardından dosya adını yazın `index.js`:

`nodemon index.js`

+ Nodemon package.json dosyasına bir script olarak kaydedilebilir. Script olarak kaydettiğinizde Nodemon'u sadece `npm run start` diyerek de başlatabilirsiniz:

```
"scripts": {
     "start": "nodemon app.js",
 }
```

![nodemon](https://user-images.githubusercontent.com/101933251/162620428-efe1c9ec-9198-4e63-931a-35d4256e9512.JPG)

---

### 13. Formidable Modülü ile Dosya Yüklemek

Node.js'de sunucuya dosya yükleme işlemlerini kendimiz yapabileceğimiz gibi NPM aracılığı ile `formidable` modülünü yükleyerek de gerçekleştirebiliriz.

1. Uygulamanızın klasörününü oluşturun ve içinde terminal aracılığıyla package.json dosyası oluşturun:

`npm init -y`

2. Uygulamanızda ana dosyayı oluşturun `index.js`.

3. Uygulamanıza terminalden Nodemon'u yükleyin ve çalıştırın:

`npm install --save nodemon`
`nodemon index.js`

4. Uygulamanıza Terminalden Formidable modülünü yükleyin:

`npm install --save formidable`

5. Ana dosyanızda `index.js` server kurulumu işlemlerinizi yapın `http, req, res, port vs` ve `Formidable` modülünü bir değişken oluştup `require("")` içinde çağırarak dahil edin.

```
const http = require("http");
const formidable = require("formidable");

const server = http.createServer((req,res)=>{
      res.writeHead(200, {"Content-Type":"text/html"});
});

const PORT = 5000;

server.listen(PORT, ()=>{
    console.log("Server çalışıyor..")
});
```

6. Dosya yükleme alanı için bir form alanı oluşturun. `form action = "dosyayukleme" method="post"` kodunda `action = "dosyayukleme"` bize formun gönderildikten sonra hangi adrese gideceğini gösterir (back-end kısmında dosya /dosyayukleme adresinden alınacaktır); `method= "post"` ise bunun bir post isteği olduğunu belirtir.

```
const server = http.createServer((req,res)=>{

      res.writeHead(200, {"Content-Type":"text/html"});
      res.write('<form action="dosyayukleme" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="yuklenendosya"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();

});
```

Yazdığımız kodlardan sonra Web sayfamızda böyle bir form alanı oluşacaktır:

![form](https://user-images.githubusercontent.com/101933251/162621317-a7ae1ea2-0525-411d-9f4e-a875a659c827.JPG)

7. Yüklenen dosyanın back-end tarafında karşılanacağı /dosyayukleme adresi için yönlendirme yapın ve yönlendirmenin içinde form isminde bir değişken oluşturun. Form değişkenine değer olarak `new formidable.IncomingForm()` verin. Bu gelen form'u alacaktır.

```
const server = http.createServer((req,res)=>{
       
      if (req.url == "/dosyayukleme") {
              const form = new formidable.IncomingForm();
      } else {

      res.writeHead(200, {"Content-Type":"text/html"});
      res.write('<form action="dosyayukleme" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="yuklenendosya"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
      }
});
```

8. Form değişkenine `parse()` fonksiyonunu verin. `parse()` fonksiyonu iki parametre alır: Birincisi `req` ve ikincisi de `(err, field, files)=>{}` değerlerini içeren bir callback fonksiyonudur. Eğer form'a başarılı bir şekilde dosya yüklenir ve submit edilirse (gönder butonuna basılırsa) callback fonksiyonu `res.write("Dosya Yüklendi")` fonksiyonunu çalıştırıp ekrana "Dosya Yüklendi" yazdıracaktır.

```
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
```
**Deneyelim**

+ Bu kodlardan sonra `localhost:5000` adresinde Web sayfamız böyle görünecektir:

![formidable local](https://user-images.githubusercontent.com/101933251/162623504-09efec27-5595-4f2b-b980-d8d1176fab1a.JPG)

+ Dosya Seç'e tıklayarak bir dosya seçin:

![formidable local up](https://user-images.githubusercontent.com/101933251/162623559-4d813ce2-8b1e-4da4-bd4e-4579f7c2cf01.JPG)

+ Gönder'e tıkladıktan sonra "Dosya yüklendi" sonucu çıkarsa dosya başarılı şekilde yüklenmiş olacaktır:

![formidable local update](https://user-images.githubusercontent.com/101933251/162623603-97757e9f-48ce-4f09-9411-1b90aba972f9.JPG)

---

### 14. Nodemailer ile Mail Göndermek

Node.js'de `Nodemailer` modülü ile mail gönderme işlemleri yapılabilir. Nodemailer modülü SMTP sunucusuna bağlanarak mail gönderir. 

1. Nodemailer'i kullanmak için öncelikle uygulamanıza indirin:

`npm install --save nodemailer`

2. Nodemailer'i kullanacağız dosyada bir değişkene atayıp `require()` ile çağırın:

`const nodemailer = require("nodemailer")`

3. Nodemailer'i dahil edildikten sonra mail gönderme ve mail doğrulama gibi işlemleri yapmak için SMTP bilgileri `createTransport` metoduna parametre olarak aktarılmalıdır. Bunun için `transporter` adında bir değişken oluşturun ve SMTP tanımlama bilgilerini `createTransport` metodu ile birlikte o değişken üzerinden yapın. `createTransport()` metodu içinde nesne olarak `{}` bilgiler tanımlanır. 

 + İlk bilgi olan `service: 'gmail'` bilgisi kullanılacak servisi tanımlar ve gmail'in kullanılacağını belirtir. Outlook gibi servisleri de kullanabilirsiniz.
 + `auth` bilgisi e-postayı gönderecek olan hesabın e-mail ve şifresini bilgi olarak alır.

```
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'seninepostaadresin@outlook.com',
    pass: 'seninepostaşifren'
  }
});

```

5. Gönderilecek mail'in bilgilerini tanımlamak için türü obje olan `mail` isminde bir değişken oluşturun. 

 + From: Mail gönderen kişinin mail adresidir.
 + To: Mailin gönderileceği kişinin mail adresidir. 
 + Subject: Mail başlığıdır.
 + Text: Mail içeriğidir (Eğer HTML göndermek istiyorsanız text yerine `html: <h1></h1>` gibi bir HTML içeriği gönderebilirsiniz.)

```
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'seninepostaadresin@outlook.com',
    pass: 'seninepostaşifren'
  }
});

const mail = {
  from: 'seninepostaadresin@outlook.com',
  to: 'epostagöndereceğinadres@outlook.com',
  subject: 'Node.js',
  text: 'Node.js ile Mail Gönderiyoruz'
};
```

6. `transporter` değişkenine `sendMail()` metodunu çağırın. `sendMail()` metodu iki parametre alır: Birincisi mail bilgilerini oluşturduğumuz `mail` değişkeni, ikincisi içinde `err` ve `info` parametrelerini alan bir callback fonksiyonu `(err, info)=>{}`. Bu callback fonksiyonu ile hata oluşursa hata yazdırılır, oluşmazsa işlem bilgisi konsola yazdırılacaktır.

```
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'seninepostaadresin@outlook.com',
    pass: 'seninepostaşifren'
  }
});

const mail = {
  from: 'seninepostaadresin@outlook.com',
  to: 'epostagöndereceğinadres@outlook.com',
  subject: 'Node.js',
  text: 'Node.js ile Mail Gönderiyoruz'
};

transporter.sendMail(mail, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
```
---

### 15. Event Emitter

**Events**: Events, olaylara karşılık gelir. Bilgisayarda dosya açma-kapama veya bir bağlantıya tıklama gibi çoğu şey olaydır. Node.js'de nesneler birçok bakımdan olayları tetikleyebilir ve olaylar gerçekleşir. Örnek olarak aşağıdaki kod `deneme.txt` dosyasını açacaktır ve bunu `rs.on` ile yapar. Bu `olay`a bir örnek olarak verilebilir.

```
const fs = require('fs');
const rs = fs.createReadStream('./deneme.txt');
rs.on('open', function () {
  console.log('The file is open');
});
```

1. Node.js kendi olaylarınızı oluşturabileceğiniz, başlatabileceğiniz ve dinleyebileceğiniz `events` adlı çekirdek bir modüle sahiptir. `events` modülünü kullanabilmek için `require()` ile dahil edin. 

`const events = require('events');`

2. `events` modülünün tüm özellikleri `EventEmitter()` nesnesi içerisindedir. Bu `EventEmitter()` nesnesine erişmek için önce dosyanızda yeni bir `EventEmitter()` nesnesi oluşturun:

```
const events = require('events');
const eventEmitter = new events.EventEmitter();
```

3. EventEmitter Nesnesi ile kendi olaylarınıza olay işleyicileri atayabilirsiniz. Aşağıdaki örnekte, bir "scream" olayı başlatıldığında yürütülecek bir fonksiyon yarattık. Bir olayı başlatmak için emit() yöntemini kullanın.

```
const events = require('events');
const eventEmitter = new events.EventEmitter();

//Bir olay yakalayıcı yaratın
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Olay işleyicisini bir olaya atayın:
eventEmitter.on('scream', myEventHandler);

//'Scream' olayını başlat.
eventEmitter.emit('scream');
```

Konsol çıktısı:

![event](https://user-images.githubusercontent.com/101933251/162627397-3ac11113-286b-4243-9f66-b8f2d3913802.JPG)

