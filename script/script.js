document.getElementById("hasil").addEventListener("click", total)

// menghitung gaji
function total(){

    // pemanggilan nama
    var nama_employee = document.getElementById('get_nama_pegawai');
    nama_employee.innerHTML = document.getElementById('nama').value;

    // pemanggilan no. NIK
    var no_NIK = document.getElementById('get_NIK');
    no_NIK.innerHTML = document.getElementById('NIK').value;

    // pemanggilan jenis kelamin
    var jenis_kelamin = document.getElementById('get_jns_klmn');
    jenis_kelamin.innerHTML = document.getElementById('jns_klmn').value;

    // pemanggilan golongan gaji
    var golongan = document.getElementById('golongan').value;
    var golGaji = document.getElementById('get_golongan');
    golGaji.innerHTML = document.getElementById('golongan').value;

    // gaji pokok
    var gaji_pokok = 0;
    
    if (golongan == "Golongan I"){
        gaji_pokok = 2000000;
    } else if (golongan == "Golongan II"){
        gaji_pokok = 3000000;
    } else if (golongan == "Golongan III"){
        gaji_pokok = 4000000;
    } else if (golongan == "Golongan IV"){
        gaji_pokok = 5000000;
    } else if (golongan == "Golongan V"){
        gaji_pokok = 6000000;
    }

    // pemanggilan gaji pokok
    var gaji_pokokk = document.getElementById('get_gaji_pokok');
    gaji_pokokk.innerHTML = gaji_pokok; 
    
    // pemanggilan status
    var stts = document.getElementById('get_status');
    stts.innerHTML = document.getElementById('status').value;

    //pemanggilan tanggungan 
    var jmlh_tanggungan = document.getElementById('get_tanggungan');
    var byk_tanggungan = document.getElementById('tanggungan').value;
    jmlh_tanggungan.innerHTML = byk_tanggungan;

    // pemanggilan tunjangan 
    var jmlh_tunjangan  = document.getElementById('get_tunjangan');
    var hitung_tunjangan = byk_tanggungan * 1000000;
    jmlh_tunjangan.innerHTML =  hitung_tunjangan;

    // pemanggilan potongan bank
    var potonganBank = document.getElementById('get_potongan');
    var byk_potongan = document.getElementById('potongan').value
    potonganBank.innerHTML = byk_potongan;

    // pemanggilan potongan bank
    var total_gaji = document.getElementById('get_total_gaji');
    var hasil_hitung = (Number(gaji_pokok) + Number(hitung_tunjangan)) - Number(byk_potongan);
    total_gaji.innerHTML = hasil_hitung;
}






