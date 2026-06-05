const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

/* =========================
   MENU MOBILE
========================= */

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {

            menuToggle.innerHTML = "✕";

        } else {

            menuToggle.innerHTML = "☰";

        }

    });

}

/* =========================
   FECHAR MENU AO CLICAR
========================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("active");

        }

        if (menuToggle) {

            menuToggle.innerHTML = "☰";

        }

    });

});

/* =========================
   HEADER SCROLL
========================= */

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* =========================
   MODAL TERMOS
========================= */

const openTerms = document.getElementById("openTerms");
const termsModal = document.getElementById("termsModal");
const closeTerms = document.getElementById("closeTerms");
const closeButton = document.getElementById("closeButton");

/* ABRIR MODAL */

if (openTerms && termsModal) {

    openTerms.addEventListener("click", () => {

        termsModal.classList.add("active");

    });

}

/* FECHAR NO X */

if (closeTerms && termsModal) {

    closeTerms.addEventListener("click", () => {

        termsModal.classList.remove("active");

    });

}

/* FECHAR NO BOTÃO */

if (closeButton && termsModal) {

    closeButton.addEventListener("click", () => {

        termsModal.classList.remove("active");

    });

}

/* FECHAR CLICANDO FORA */

window.addEventListener("click", (e) => {

    if (e.target === termsModal) {

        termsModal.classList.remove("active");

    }

});
