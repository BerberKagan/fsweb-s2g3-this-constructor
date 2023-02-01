// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
    - Bir Kisi Constructor'ı yazın 'isim ve 'yas' argümanları alsın.
    - Tüm Kisi örnekleri boş bir `mide` dizisi ile yüklensin.
    - Kisi örneklerine `.ye("birYemek")` yeteneği ekleyin:
        + .ye() parametre olarak bir string almalıdır, bu parametre yenilebilir bir yiyeceği temsil eder
        + Bir yiyecek yenildiğinde, `mide` dizisine eklenir.
        + Mide dizisinde 10 eleman varsa `ye` metodu hiçbir etki yapmaz.
    - Kisi örneklerine `.bosalt()` yeteneği ekleyin:
        + Eğer bosalt tetiklenirse, 'mide' dizisi boşaltılır.
    - Kisi örneklerine `.toString()` metodu ekleyin:
        + Bu `isim` ve `yas` i içeren bir string döndürmelidir Örnek: "Mary, 50"
*/

function Kisi(isim, yas) {
  this.isim = isim;
  this.yas = yas;
  this.mide = [];
  this.ye = function(yemek) {
    this.mide.push (yemek);
    if (this.mide.length<11) {
      this.mide.push(yemek);
    }
  }
  this.bosalt = function () {
    this.mide = [];
  }
  this.toString = function () {
    return `${this.isim}, ${this.yas}`;
  }
}
let name = new Kisi ("İhsan", 40)
name.ye("Patates")
name.ye("Hamburger")
console.log(name.mide);

/*
  GÖREV 2
    - Bir Araba constructoru yazın, parametre olarak `model` ve `milesPerGallon` alsın.
    - Tüm Araba örnekleri:
        + `tank` ı 0 olarak yüklensin
        + `odometer` ı 0 olarak yüklensin
    - Arabalara `.fill(gallons)` metoduyla depoyu fulleme kabiliyeti ekleyin
      + 'gallons', galon sayısını parametre olarak alacak
      + girilen galonu `tank` a ekleyecek.
    - ESNEK: Arabalara `.drive(distance)` yeteneği ekleyin. Distance ile ilgili:
        + `odometer` ın yükselmesine neden olmalı.
        + `MilesPerGallon` hesaba katılarak `tankın` düşmesine neden olmalıdır.
    - ESNEK: Bir arabanın benzini biterse drive metodu etkisiz şunu döndürmelidir:
        +  "x milde benzinim bitti!" x değişkeni `odometer` daki sayı olmalıdır.
*/

function Araba(model, tuketim) {
  this.model = model;
  this.milesPerGallon = tuketim;
  this.tank = 0;
  this.odometer = 0; 
  this.fill = function (galon) {
    this.tank+=galon; 
  }
  this.drive = function (distance) {
    this.odometer+=distance;
    this.tank-=Math.round(distance/this.milesPerGallon);
    if (this.tank<=0) {
      const extraMile = this.tank * this.milesPerGallon;
      this.odometer+=Math.round(extraMile);
      this.tank = 0;
      console.log (`${this.odometer} milde benzinim bitti!`)
    } 
  }
}
let vw = new Araba ("Passat", 15);
vw.fill(65);
vw.drive(125);
vw.drive(950);
console.log(vw.tank);
console.log(vw.odometer);


/* 
  GÖREV 3
  Kendi cümlelerinizle "this" kelimesinin 4 prensibini açıklayın:
  1. Window/Global Object Binding: Global scope’tayken, this değeri window/console nesnesi olacaktır.
  2. Implicit Binding: Örtük bağlama, bir fonksiyonu çağırmak için nokta gösterimi kullanıldığında gerçekleşir.
  3. New Binding: Bir constructor function(yapıcı fonksiyon) kullandığımızda, this, constructor function tarafından oluşturulan ve döndürülen nesnenin belirli bir örneğini ifade eder.
  4. Explicit Binding: JavaScript'in call veya apply yöntemini her kullandığımızda, this açıkça tanımlanır. 
*/


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as(){
  console.log('Kodlar sorunsuz çalışıyor!');
  return 'sa';
}
as();
module.exports = {
  as,
  Kisi, 
  Araba,
  /* Bebek */
}
