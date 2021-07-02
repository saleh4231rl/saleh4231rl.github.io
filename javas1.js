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

// function hitungTarif() {
//     // let kotaAsal = document.getElementsByClassName("kotaAsal").value;
//     const kotaAsal = document.querySelector("#browser1").value;
//     const kotaTujuan = document.querySelector("#browser2").value;
//     const berat = document.querySelector("#number").value;
//     console.log(kotaAsal);
//     console.log(kotaTujuan);
//     console.log(berat);
//     let tarif;
//     for (let i = 0; i < database.length; i++) {
//         if (kotaAsal === database[i].city[0] && kotaTujuan === database[i].city[1]) {
//             tarif = database[i].cost;
//             break;
//         }
//     }
//     console.log(tarif);
//     tarif *= Number(berat);
//     const totalHarga = document.getElementById("totalHarga")
//     totalHarga.innerHTML = tarif

//     //COba namabhin yang ada di catatan.txt dari kk Alam, bisa di tes lagi
//     // let kotaAsal1 = document.getElementById('kotaAsal')
//     // for (let j = 0; j < database.length; j++) {
//     //     let kotaAsal1 = database[j].city[0]
//     // }
//     // console.log(kotaAsal1);
//     // return tarif;
// }
// console.log(hitungTarif(database));


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
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(tarif);
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
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// nambahin kota ke input
function readCityList(data) {
    const list = document.getElementById("browsers")

    for (let i = 0; i < data.length; i++) {
        const option = document.createElement('option')
        option.value = data[i]
        list.appendChild(option)
    }
}



function generateTarif(asal, tujuan, berat) {
    const price = cekTarif(asal, tujuan, berat)
    const origin = capitalizeWord(asal)
    const destination = capitalizeWord(tujuan)
    berat = Number(berat)
    console.log(price, origin, destination);

    // create table
    const divTable = document.getElementsByClassName('fitur-section2')[0]
    divTable.innerHTML = ''

    if (!price) {
        const errorMsg = document.createElement('h3')
        errorMsg.setAttribute('id', 'invalidData')
        errorMsg.innerHTML = "Mohon masukkan data yang valid"

        return divTable.appendChild(errorMsg)
    }

    const table = document.createElement('table')
    divTable.appendChild(table)

    const tableTr = document.createElement("tr")
    table.appendChild(tableTr)

    let judul = ['Origin', 'Destination', 'Price']
    for (let i = 0; i < judul.length; i++) {
        const tableTh = document.createElement('th')
        tableTh.innerHTML = judul[i]
        tableTr.appendChild(tableTh)
    }

    const tableIsi = document.createElement('tr')
    table.appendChild(tableIsi)

    let isi = [origin, destination, price]
    for (let i = 0; i < isi.length; i++) {
        const tableTd = document.createElement('td')
        tableTd.innerHTML = isi[i]
        tableIsi.appendChild(tableTd)
    }
}

// invoke function

if (document.getElementById("index")) {
    let selectorTarif = document.getElementById("checkButton")
    console.log(selectorTarif);
    let asal = document.getElementById("origin")
    let tujuan = document.getElementById("destination")
    let price = document.getElementById("weight")

    readCityList(cityList)
    selectorTarif.addEventListener('click', function() {
        generateTarif(asal.value, tujuan.value, price.value)
    })
}