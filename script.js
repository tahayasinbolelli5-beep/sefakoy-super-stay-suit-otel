const OTEL_VERI = {
    whatsapp: "905330148676", 
    std: 12,
    suit: 4
};

function baslat() {
    const stdGrid = document.getElementById('standard-rooms');
    const suitGrid = document.getElementById('suit-rooms');

    const icons = `<div class="room-icons">
        <i class="fas fa-wifi" title="Ücretsiz Wi-Fi"></i>
        <i class="fas fa-snowflake" title="Klima"></i>
        <i class="fas fa-tv" title="Smart TV"></i>
        <i class="fas fa-shower" title="7/24 Sıcak Su"></i>
    </div>`;

    
    for (let i = 1; i <= OTEL_VERI.std; i++) {
        stdGrid.innerHTML += `
            <div class="room-card">
                <img src="images/oda${(i % 5) + 1}.jpg" alt="Standart Oda ${i}">
                <h4>Standart Oda ${i}</h4>
                ${icons}
                <button class="btn" onclick="modalAc('Standart Oda ${i}')">Rezervasyon</button>
            </div>`;
    }

    
    for (let i = 1; i <= OTEL_VERI.suit; i++) {
        suitGrid.innerHTML += `
            <div class="room-card">
                <img src="images/oda${i}.jpg" alt="Lüks Suit ${i}">
                <h4>Lüks Suit ${i}</h4>
                ${icons}
                <button class="btn" onclick="modalAc('Lüks Suit ${i}')">Rezervasyon</button>
            </div>`;
    }
}

function modalAc(isim) {
    document.getElementById('modalRoomTitle').innerText = isim;
    document.getElementById('bookingModal').style.display = "block";
}

function closeModal() {
    document.getElementById('bookingModal').style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const isim = document.getElementById('guestName').value;
    const tarih = document.getElementById('checkInDate').value;
    const oda = document.getElementById('modalRoomTitle').innerText;
    
    
    const msg = `Merhaba! *Super Stay Suit* web sitenizden yazıyorum.%0A%0A*Rezervasyon Talebi*%0A*Oda:* ${oda}%0A*İsim:* ${isim}%0A*Giriş Tarihi:* ${tarih}`;
    
    window.open(`https://api.whatsapp.com/send?phone=${OTEL_VERI.whatsapp}&text=${msg}`, '_blank');
});

window.onload = baslat;