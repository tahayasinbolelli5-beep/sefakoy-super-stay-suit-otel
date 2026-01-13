const CONFIG = {
    whatsapp: "905330148676", 
    stdCount: 12,
    suitCount: 4
};

function initApp() {
    const stdContainer = document.getElementById('standard-rooms');
    const suitContainer = document.getElementById('suit-rooms');

    
    for (let i = 1; i <= CONFIG.stdCount; i++) {
        stdContainer.innerHTML += createRoomCard(`Standart Oda ${i}`, `oda${(i % 5) + 1}.jpg`);
    }

    
    for (let i = 1; i <= CONFIG.suitCount; i++) {
        suitContainer.innerHTML += createRoomCard(`Lüks Suit ${i}`, `oda${i}.jpg`);
    }
}

function createRoomCard(name, img) {
    return `
        <div class="room-card">
            <img src="images/${img}" alt="${name}">
            <h4>${name}</h4>
            <button class="btn" onclick="openModal('${name}')">Rezervasyon</button>
        </div>`;
}

let activeRoom = "";
function openModal(name) {
    activeRoom = name;
    document.getElementById('modalRoomTitle').innerText = name;
    document.getElementById('bookingModal').style.display = "block";
}

function closeModal() {
    document.getElementById('bookingModal').style.display = "none";
}

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const guest = document.getElementById('guestName').value;
    const date = document.getElementById('checkInDate').value;
    const msg = `Merhaba Super Stay!%0A*Rezervasyon Talebi*%0A*Oda:* ${activeRoom}%0A*İsim:* ${guest}%0A*Tarih:* ${date}`;
    window.open(`https://api.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${msg}`, '_blank');
});

window.onload = initApp;