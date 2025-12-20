/* ===================================================
   ATEL MİMARLIK - JAVASCRIPT
=================================================== */

/* ================= MOBİL MENÜ ================= */

function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("active");
}

/* Menü dışına tıklanınca kapat */
document.addEventListener("click", function (e) {
    const menu = document.querySelector(".nav-menu");
    const toggle = document.querySelector(".menu-toggle");

    if (!menu || !toggle) return;

    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});

/* ================= SCROLL EFFECT ================= */

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

/* ================= FORM KONTROL ================= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.");

        form.reset();
    });

});
