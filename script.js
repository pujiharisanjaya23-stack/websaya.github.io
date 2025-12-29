// =====================
// SURAT CINTA MUNCUL
// =====================
function showMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "block";
    msg.classList.remove("fade");
    void msg.offsetWidth; // reset animasi
    msg.classList.add("fade");
}

// =====================
// MUSIK
// =====================
function playMusic() {
    document.getElementById("music").play();
}

// =====================
// COUNTDOWN
// =====================
const specialDate = new Date("2025-02-14");

function updateCountdown() {
    const now = new Date();
    const diff = specialDate - now;

    const cd = document.getElementById("countdown");

    if (diff <= 0) {
        cd.innerHTML = "Hari spesial kita sudah tiba ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    cd.innerHTML = `${days} hari lagi menuju hari spesial kita 💕`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// =====================
// EFEK HATI JATUH
// =====================
const heartsContainer = document.createElement("div");
heartsContainer.className = "hearts";
document.body.appendChild(heartsContainer);

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 250);

// =====================
// KLIK = LEDAKAN HATI
// =====================
document.addEventListener("click", (e) => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    heart.style.fontSize = "45px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "pop 1s ease forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
});
