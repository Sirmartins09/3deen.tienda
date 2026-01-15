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
