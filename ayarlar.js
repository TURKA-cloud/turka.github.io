// Basit bir karşılama mesajı
window.onload = () => {
    console.log("Web sitesi başarıyla yüklendi!");
};

// Sayfa kaydırıldığında navigasyon rengini değiştirme
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "#1a252f";
    } else {
        nav.style.background = "#2c3e50";
    }
});