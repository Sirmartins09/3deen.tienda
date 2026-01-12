// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const navContainer = document.querySelector(".nav-container");

toggle.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

// HERO SWIPER
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
});

// PRODUCT SWIPERS (cards)
document.querySelectorAll(".product-swiper").forEach(swiperEl => {
  new Swiper(swiperEl, {
    loop: true,
    pagination: {
      el: swiperEl.querySelector(".swiper-pagination"),
      clickable: true,
    },
  });
});
