// ==============================
// MENU MOBILE
// ==============================
const toggle = document.querySelector(".menu-toggle");
const navContainer = document.querySelector(".nav-container");

if (toggle && navContainer) {
  toggle.addEventListener("click", () => {
    navContainer.classList.toggle("active");
  });
}

// ==============================
// HERO SWIPER
// ==============================
if (document.querySelector(".hero-swiper")) {
  new Swiper(".hero-swiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero-swiper .swiper-button-next",
      prevEl: ".hero-swiper .swiper-button-prev",
    },
  });
}

// ==============================
// PRODUCT SWIPERS (cards)
// ==============================
document.querySelectorAll(".product-swiper").forEach((swiperEl) => {
  new Swiper(swiperEl, {
    loop: true,
    pagination: {
      el: swiperEl.querySelector(".swiper-pagination"),
      clickable: true,
    },
  });
});

// ==============================
// LIGHTBOX FUNCIONALIDAD
// ==============================
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

// Seleccionamos todas las imágenes dentro de las cards
const productImages = document.querySelectorAll(".card img");

productImages.forEach((img) => {
  img.addEventListener("click", function () {
    lightboxModal.style.display = "block";
    lightboxImg.src = this.src; // Copia la fuente de la imagen clickeada
  });
});

// Cerrar con el botón "X"
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightboxModal.style.display = "none";
  });
}

// Cerrar haciendo clic afuera de la imagen
if (lightboxModal) {
  lightboxModal.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightboxModal.style.display = "none";
    }
  });
}

// Cerrar con la tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightboxModal && lightboxModal.style.display === "block") {
    lightboxModal.style.display = "none";
  }
});