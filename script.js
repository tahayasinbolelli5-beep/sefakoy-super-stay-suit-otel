
const hotelRooms = [
  
    { name: 'Standart Oda 1', price: '1.600 TL', imgs: ['images/oda6.jpg', 'images/lavabo.jpg', 'images/odamasa.jpg'] },
    { name: 'Standart Oda 2', price: '1.600 TL', imgs: ['images/oda7.jpg', 'images/lavabo1.jpg', 'images/odamasa1.jpg'] },
    { name: 'Standart Oda 3', price: '1.600 TL', imgs: ['images/oda8.jpg', 'images/lavabo.jpg', 'images/odamasa.jpg'] },
    { name: 'Standart Oda 4', price: '1.600 TL', imgs: ['images/oda9.jpg', 'images/lavabo1.jpg', 'images/odamasa1.jpg'] },
    { name: 'Standart Oda 5', price: '1.600 TL', imgs: ['images/oda10.jpg', 'images/lavabo.jpg', 'images/odamasa.jpg'] },
    
    { name: 'Suit Oda 1', price: '2.200 TL', imgs: ['images/oda.jpg', 'images/ikram.jpg', 'images/lavabo.jpg', 'images/oda12.jpg'] },
    { name: 'Suit Oda 2', price: '2.200 TL', imgs: ['images/oda1.jpg', 'images/ikram1.jpg', 'images/lavabo1.jpg', 'images/oda13.jpg'] },
    { name: 'Suit Oda 3', price: '2.200 TL', imgs: ['images/oda2.jpg', 'images/ikram.jpg', 'images/lavabo.jpg', 'images/oda14.jpg'] }
];

const roomGrid = document.getElementById('roomGrid');
const modal = document.getElementById('roomModal');
const modalBody = document.getElementById('modalBody');


hotelRooms.forEach((room) => {
    const card = document.createElement('div');
    card.className = 'room-card';
    card.innerHTML = `
        <img src="${room.imgs[0]}" alt="${room.name}">
        <h3>${room.name}</h3>
        <p>${room.price} / Gecelik</p>
    `;
    card.onclick = () => showRoomDetails(room);
    roomGrid.appendChild(card);
});


function showRoomDetails(room) {
    let imagesContent = room.imgs.map(img => `<img src="${img}" alt="Görsel">`).join('');
    
    modalBody.innerHTML = `
        <h2 style="color:#d4a017; font-size:2rem; margin-bottom:15px;">${room.name}</h2>
        <div class="modal-images">${imagesContent}</div>
        <div style="background:#f9f9f9; padding:25px; border-radius:15px; margin-bottom:25px;">
            <p style="font-size:1.2rem;"><strong>Fiyat:</strong> ${room.price}</p>
            <p style="margin-top:10px; color:#555;">Odalarımızda konforunuz için her detay düşünülmüştür. Klima, mini bar, ücretsiz Wi-Fi ve 7/24 oda servisi mevcuttur.</p>
        </div>
        
        <h3 style="border-bottom:2px solid #d4a017; padding-bottom:10px;">Hızlı WhatsApp Rezervasyonu</h3>
        <form onsubmit="sendWhatsApp(event, '${room.name}')" style="margin-top:20px; display:flex; flex-direction:column; gap:15px;">
            <input type="text" id="guestName" placeholder="Adınız ve Soyadınız" required style="padding:15px; border:1px solid #ddd; border-radius:8px; font-size:1rem;">
            <input type="date" id="checkInDate" required style="padding:15px; border:1px solid #ddd; border-radius:8px; font-size:1rem;">
            <button type="submit" style="padding:18px; background:#25d366; color:#fff; border:none; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem; transition:0.3s;">
                WhatsApp ile Talebi Gönder
            </button>
        </form>
    `;
    modal.style.display = "block";
}


function sendWhatsApp(e, roomName) {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const date = document.getElementById('checkInDate').value;
    const telNo = "905330148676"; 

    const text = `Merhaba Sefaköy Super Stay! %0A%0A` +
                 `Yeni bir rezervasyon talebim var:%0A` +
                 `*İsim:* ${name}%0A` +
                 `*Oda:* ${roomName}%0A` +
                 `*Giriş Tarihi:* ${date}`;

    alert("Sayın " + name + ", WhatsApp'a yönlendiriliyorsunuz. Lütfen açılan ekranda 'Gönder' butonuna basınız.");
    
    window.open(`https://api.whatsapp.com/send?phone=${telNo}&text=${text}`, '_blank');
    modal.style.display = "none";
}


document.querySelector('.close').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

function scrollToRooms() {
    document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
}