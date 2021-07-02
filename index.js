function cekTarif(asal, tujuan, berat) {
  const city = [asal, tujuan].sort();
  let tarif = 0;

  for (let i = 0; i < database.length; i++) {
    if (city[0] === database[i].city[0] && city[1] === database[i].city[1]) {
      tarif = database[i].cost;
      break;
    }
  }
  tarif *= berat;
  return tarif;
}

function tambahKota(asal, tujuan, tarif) {
  const result = database.push({ city: [asal, tujuan].sort(), cost: tarif });
  return result;
}

function hapusKota(asal, tujuan) {
  let array = [asal, tujuan].sort();

  for (let i = 0; i < database.length; i++) {
    if (array[0] === database[i].city[0] && array[1] === database[i].city[1]) {
      database.splice(i, 1);
    }
  }
}

const database = [
  { city: ["jakarta", "bandung"], cost: "11000" },
  { city: ["jakarta", "semarang"], cost: "15000" },
  { city: ["jakarta", "surabaya"], cost: "13000" },
  { city: ["bandung", "semarang"], cost: "22000" },
  { city: ["bandung", "surabaya"], cost: "16000" },
  { city: ["bandung", "medan"], cost: "35000" },
  { city: ["medan", "solo"], cost: "36000" },
  { city: ["medan", "padang"], cost: "10000" },
  { city: ["medan", "padang"], cost: "10000" },
];

const order = [];
// RANDOM CODE
randomString(10);
function randomString(stringLength) {
  let randomString = ``;
  let characters = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  for (let i = 0; i < stringLength; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(randomString);
}
