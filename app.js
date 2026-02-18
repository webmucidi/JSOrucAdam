// Mini imsakiye veri kümesi (Array of Objects)
// (Ders için örnek. İstersen gerçek veri: API/fetch ile gelir.)
const imsakiye = [
  {
    gunNo: 1,
    miladi: "11 Mart 2024",
    imsak: "05:38",
    iftar: "19:13",
    hadis: "Kolaylaştırınız, zorlaştırmayınız. Müjdeleyiniz, nefret ettirmeyiniz.",
    tema: "mavi",
  },
  {
    gunNo: 2,
    miladi: "12 Mart 2024",
    imsak: "05:36",
    iftar: "19:14",
    hadis: "İnsanların en hayırlısı, insanlara faydalı olandır.",
    tema: "mor",
  },
  {
    gunNo: 3,
    miladi: "13 Mart 2024",
    imsak: "05:35",
    iftar: "19:15",
    hadis: "Güler yüz sadakadır.",
    tema: "yesil",
  },
  {
    gunNo: 4,
    miladi: "14 Mart 2024",
    imsak: "05:33",
    iftar: "19:16",
    hadis: "Allah merhamet edenlere merhamet eder.",
    tema: "turuncu",
  },
  {
    gunNo: 5,
    miladi: "15 Mart 2024",
    imsak: "05:31",
    iftar: "19:17",
    hadis: "Komşusu açken tok yatan bizden değildir.",
    tema: "lacivert",
  }
];

// Ramazan toplam gün (örnek 30) => bar hesabı için
const TOPLAM_GUN = 30;

// DOM
const gunSec = document.querySelector("#gunSec");
const miladi = document.querySelector("#miladi");
const ramazanGun = document.querySelector("#ramazanGun");
const imsak = document.querySelector("#imsak");
const iftar = document.querySelector("#iftar");
const hadisMetin = document.querySelector("#hadisMetin");
const rozet = document.querySelector("#rozet");
const barDol = document.querySelector("#barDol");
const kalanYazi = document.querySelector("#kalanYazi");
const gorsel = document.querySelector("#gorsel");

// Select doldur
for (let i = 0; i < imsakiye.length; i++) {
  const opt = document.createElement("option");
  opt.value = i; // index
  opt.textContent = imsakiye[i].gunNo + ". Gün - " + imsakiye[i].miladi;
  gunSec.appendChild(opt);
}

function temaUygula(tema) {
  // basit tema sistemi (if ile öğretici)
  if (tema === "mavi")    gorsel.style.background = "linear-gradient(135deg,#1f2937,#2563eb)";
  if (tema === "mor")     gorsel.style.background = "linear-gradient(135deg,#111827,#7c3aed)";
  if (tema === "yesil")   gorsel.style.background = "linear-gradient(135deg,#052e16,#22c55e)";
  if (tema === "turuncu") gorsel.style.background = "linear-gradient(135deg,#111827,#f97316)";
  if (tema === "lacivert")gorsel.style.background = "linear-gradient(135deg,#0b1020,#0ea5e9)";
}

function guncelle() {
  const index = Number(gunSec.value);
  const gun = imsakiye[index];

  miladi.textContent = gun.miladi;
  ramazanGun.textContent = "Ramazan " + gun.gunNo + ". Gün";
  imsak.textContent = gun.imsak;
  iftar.textContent = gun.iftar;
  hadisMetin.textContent = gun.hadis;

  // rozet: gün bilgisi
  rozet.textContent = gun.gunNo + "/" + TOPLAM_GUN;

  // Bayrama kalan hesap
  const kalan = TOPLAM_GUN - gun.gunNo;
  kalanYazi.textContent = kalan + " gün";

  // bar: bayrama yaklaşma yüzdesi
  const yuzde = Math.round((gun.gunNo / TOPLAM_GUN) * 100);
  barDol.style.width = yuzde + "%";

  // bar rengi: sona yaklaştıkça değişsin (öğretici)
  if (yuzde >= 80) barDol.style.background = "#f59e0b";
  else if (yuzde >= 50) barDol.style.background = "#22c55e";
  else barDol.style.background = "#3b82f6";

  temaUygula(gun.tema);
}

gunSec.addEventListener("change", guncelle);
guncelle();
