// Konsol Mesajı
console.log("Turka Siyah & Altın Tema Aktif!");

// Sayfa kaydırıldığında menüyü hafifçe şeffaf yapma
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0, 0, 0, 0.95)";
        nav.style.boxShadow = "0 2px 20px rgba(255, 215, 0, 0.1)";
    } else {
        nav.style.background = "#000000";
        nav.style.boxShadow = "none";
    }
});
