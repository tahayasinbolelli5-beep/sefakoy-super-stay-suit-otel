const OTEL_AYAR = {
    whatsapp: "905330148676", 
    standartOdaSayisi: 12,
    suitOdaSayisi: 4
};

function odalariYukle() {
    const stdAlan = document.getElementById('standard-rooms');
    const suitAlan = document.getElementById('suit-rooms');

    
    for (let i = 1; i <= OTEL_AYAR.standartOdaSayisi; i++) {
        stdAlan.innerHTML += odaTaslagiOlustur(`Standart Oda ${i}`, `oda${(i % 5) + 1}.jpg`);
    }

    
    for (let i = 1; i <= OTEL_AYAR.suitOdaSayisi; i++) {
        suitAlan.innerHTML += odaTaslagiOlustur(`Lüks Suit ${i}`, `oda${i}.jpg`);
    }
}

function odaTaslagiOlustur(isim, resim) {
    return `
        <div class="room-card">
            <img src="images/${resim}" alt="${isim}">
            <h4>${isim}</h4>
            <button class="btn" onclick="modalAc('${isim}')">Rezervasyon</button>
        </div>`;
}

let seciliOda = "";
function modalAc(isim) {
    seciliOda = isim;
    document.getElementById('modalRoomTitle').innerText = isim;
    document.getElementById('bookingModal').style.display = "block";
}

function closeModal() {
    document.getElementById('bookingModal').style.display = "none";
}

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const isim = document.getElementById('guestName').value;
    const tarih = document.getElementById('checkInDate').value;
    const mesaj = `Merhaba Super Stay!%0A%0A*Rezervasyon Talebi*%0A*Oda:* ${seciliOda}%0A*Müşteri:* ${isim}%0A*Giriş Tarihi:* ${tarih}`;
    window.open(`https://api.whatsapp.com/send?phone=${OTEL_AYAR.whatsapp}&text=${mesaj}`, '_blank');
});

window.onload = odalariYukle;