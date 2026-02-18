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
for(let i=0;i<imsakiye.length;i++){
    let tarih=imsakiye[i].tarih;
    const gun=document.createElement("option");
    gun.textContent=tarih;
    document.querySelector("#slctGun").appendChild(gun);

}









