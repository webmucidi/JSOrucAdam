const imsakiye=[
{
    "tarih": "2026-02-19",
    "imsak": "03:45",
    "iftar": "18:49"
},
{
    "tarih": "2026-02-20",
    "imsak": "03:46",
    "iftar": "18:50"
},
{
    "tarih": "2026-02-21",
    "imsak": "03:47",
    "iftar": "18:51"
}
];

const seciliGun=document.querySelector("#slctGun");
const iftarVakti=document.querySelector(".iftar");

for(let i=0;i<imsakiye.length;i++){
    let secilen=imsakiye[i];
    const gun=document.createElement("option");
    gun.value=secilen.iftar;
    gun.textContent=secilen.tarih;
    seciliGun.appendChild(gun);
}""

seciliGun.addEventListener("change",function(){
    let iftarSaati=this.value;
    iftarVakti.textContent=iftarSaati;
});








