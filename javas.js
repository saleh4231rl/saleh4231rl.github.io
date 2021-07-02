const database = [
    { city: ["Jakarta", "Bandung"], cost: "11000" },
    { city: ["Jakarta", "Semarang"], cost: "15000" },
    { city: ["Jakarta", "Surabaya"], cost: "13000" },
    { city: ["Bandung", "Semarang"], cost: "22000" },
    { city: ["Bandung", "Surabaya"], cost: "16000" },
    { city: ["Bandung", "Medan"], cost: "35000" },
    { city: ["Medan", "Semarang"], cost: "30000" },
    { city: ["Medan", "Surabaya"], cost: "30000" },
];

function hitungTarif() {
    // let kotaAsal = document.getElementsByClassName("kotaAsal").value;
    const kotaAsal = document.querySelector("#browser1").value;
    const kotaTujuan = document.querySelector("#browser2").value;
    const berat = document.querySelector("#number").value;
    console.log(kotaAsal);
    console.log(kotaTujuan);
    console.log(berat);
    let tarif;
    for (let i = 0; i < database.length; i++) {
        if (kotaAsal === database[i].city[0] && kotaTujuan === database[i].city[1]) {
            tarif = database[i].cost;
            break;
        }
    }
    console.log(tarif);
    tarif *= Number(berat);
    const totalHarga = document.getElementById("totalHarga")
    totalHarga.innerHTML = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(tarif)

    // const number = 123456.789;

    // console.log(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(tarif));
    // console.log();
    //COba namabhin yang ada di catatan.txt dari kk Alam, bisa di tes lagi
    // let kotaAsal1 = document.getElementById('kotaAsal')
    // for (let j = 0; j < database.length; j++) {
    //     let kotaAsal1 = database[j].city[0]
    // }
    // console.log(kotaAsal1);
    // return tarif;
}
// console.log(hitungTarif(database));

document.querySelector("p")

const order = [];
const cityList = ["Bandung", "Jakarta", "Semarang", "Surabaya", "Medan"];

function tambahKota(asal, tujuan, tarif) {
    asal = capitalizeWord(asal);
    tujuan = capitalizeWord(tujuan);
    console.log(asal, tujuan);

    const result = database.push({ city: [asal, tujuan].sort(), cost: tarif });
    for (let i = 0; i <= cityList.length; i++) {
        if (cityList[i] === asal) {
            break;
        } else if (i === cityList.length) {
            cityList.push(asal);
            break;
        }
    }
    for (let i = 0; i <= cityList.length; i++) {
        if (cityList[i] === tujuan) {
            break;
        } else if (i === cityList.length) {
            cityList.push(tujuan);
            break;
        }
    }
    return result;
}

function cekTarif(asal, tujuan, berat) {
    asal = capitalizeWord(asal);
    tujuan = capitalizeWord(tujuan);
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

function hapusKota(asal, tujuan) {
    asal = capitalizeWord(asal);
    tujuan = capitalizeWord(tujuan);
    let array = [asal, tujuan].sort();

    for (let i = 0; i < database.length; i++) {
        if (array[0] === database[i].city[0] && array[1] === database[i].city[1]) {
            database.splice(i, 1);
        }
    }
}

function capitalizeWord(string) {
    return string.charAt(0), toUpperCase() + string.slice(1);
}