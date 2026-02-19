const imsakiye=[
{
    "tarih": "2026-02-19",
    "imsak": "06:21",
    "iftar": "18:49"
},
{
    "tarih": "2026-02-20",
    "imsak": "06:20",
    "iftar": "18:50"
},
{
    "tarih": "2026-02-21",
    "imsak": "06:19",
    "iftar": "18:51"
}
];



// HTML DOM elementlerini seç
const seciliGun=document.querySelector("#slctGun");
const sonuc=document.querySelector(".iftar");

// İmsakiye verilerini kullanarak dropdown menüsünü doldur
for(let i=0;i<imsakiye.length;i++){
    let secilen=imsakiye[i];
    const gun=document.createElement("option");
    gun.value=secilen.iftar;
    gun.textContent=secilen.tarih;
    seciliGun.appendChild(gun);
}
iftaraKalanSure();
// Dropdown menüsünde bir gün seçildiğinde iftar vaktini güncelle
seciliGun.addEventListener("change",function(){
    let iftarSaati=this.value;
    sonuc.textContent=iftarSaati;
    iftaraKalanSure();
    
});

//İftara ne kadar kaldığını gösteren fonksiyonu tanımladık
function iftaraKalanSure(){
    let sistemTarihi=new Date();
    let sadeceSaat=sistemTarihi.getHours();
    

    let iftarSaati=Number(seciliGun.value.split(":")[0]);
 
    let fark=iftarSaati-sadeceSaat;

    sonuc.innerHTML+=`<br>İftara kalan süre: ${fark} saat`;
}









