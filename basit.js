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
const enerjiBar = document.querySelector("#enerji");

// İmsakiye verilerinden ilk günün iftar saatini al ve ekrana yazdır
let secilen=imsakiye[0];
let iftarSaati=secilen.iftar;
let imsakSaati=secilen.imsak;

sonuc.textContent=iftarSaati;

// İmsakiye verilerini kullanarak dropdown menüsünü doldur
for(let i=0;i<imsakiye.length;i++){
    secilen=imsakiye[i];
    const gun=document.createElement("option");
    gun.value=secilen.iftar;
    gun.textContent=secilen.tarih;
    seciliGun.appendChild(gun);
}
iftaraKalanSure();


// Dropdown menüsünde bir gün seçildiğinde iftar vaktini güncelle
seciliGun.addEventListener("change",function(){
    iftarSaati=this.value;
    sonuc.textContent=iftarSaati;
    iftaraKalanSure();
    
});

//İftara ne kadar kaldığını gösteren fonksiyonu tanımladık
function iftaraKalanSure(){
    // Sistem tarihini alıyoruz
    let sistemTarihi=new Date();

    // Sistem tarihinden sadece gün, saat ve dakikayı alıyoruz
    let sadeceGun=sistemTarihi.getDate();
    let sadeceSaat=sistemTarihi.getHours();
    let sadeceDakika=sistemTarihi.getMinutes();
    
    // Seçilen günün iftar saatini,dakikasını ve gününü alıyoruz
    let iftarSaati=Number(seciliGun.value.split(":")[0]);
    let iftarDakika=Number(seciliGun.value.split(":")[1]);
    let iftarGun=Number(seciliGun.options[seciliGun.selectedIndex].textContent.split("-")[2]);

    // İftara kalan süreyi hesaplıyoruz
    let farkSaati=iftarSaati-sadeceSaat;
    let farkDakika=iftarDakika-sadeceDakika;
    let farkGun=iftarGun-sadeceGun;

    //Sonucu ekrana yazdırıyoruz
    sonuc.innerHTML+=`<br>İftara kalan süre: ${farkGun} gün ${farkSaati} saat ${farkDakika} dakika`;

    // Enerji barını güncelliyoruz
    imsakSaati=Number(imsakSaati.split(":")[0]);

    let orucSaati=iftarSaati-imsakSaati;

    if(farkGun>0){
        enerjiBar.style.width="100%";
        enerjiBar.style.backgroundColor="green";
    } else{ 
        let oran=(farkSaati/orucSaati)*100;
        enerjiBar.style.width=oran+"%";
        if(oran<50){
            enerjiBar.style.backgroundColor="orange";
        }
        console.log(oran);
    }

    
}









