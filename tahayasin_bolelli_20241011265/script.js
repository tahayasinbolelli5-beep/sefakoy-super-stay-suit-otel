let currentRoom = "";

function openModal(roomName) {
    currentRoom = roomName;
    document.getElementById('modalRoomTitle').innerText = roomName + " Rezervasyonu";
    document.getElementById('bookingModal').style.display = "block";
}

function closeModal() {
    document.getElementById('bookingModal').style.display = "none";
}

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const date = document.getElementById('checkInDate').value;
    
    
    const telNo = "905330148676"; 

    const text = `Merhaba Super Stay Sefaköy!%0AWeb sitenizden rezervasyon talebi:%0Aİsim: ${name}%0AOda: ${currentRoom}%0AGiriş Tarihi: ${date}`;
    window.open(`https://api.whatsapp.com/send?phone=${telNo}&text=${text}`, '_blank');
});