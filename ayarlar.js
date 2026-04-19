window.onload = () => {
    console.log("Turka Sitesi Siyah Tema ile Başlatıldı.");
};

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.2)";
    } else {
        nav.style.boxShadow = "none";
    }
});
