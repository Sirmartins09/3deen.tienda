document.addEventListener('DOMContentLoaded', () => {

    // 1. Swiper Hero Section (Pantalla completa)
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: '.hero-pagination', clickable: true },
        effect: 'fade', // Transición suave
        fadeEffect: { crossFade: true }
    });

    // 2. Swiper de Productos (Tarjetas individuales)
    const productSwipers = new Swiper('.product-swiper', {
        loop: false,
        pagination: { el: '.swiper-pagination', clickable: true },
        nested: true, // Importante por si hay Swipers dentro de otros elementos
    });

    // 3. Menú Responsivo (Móvil)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if(menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Animación del botón (X)
            menuToggle.classList.toggle('open');
        });
    }

    // 4. Lightbox para ampliar imágenes de producto
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const productImages = document.querySelectorAll('.card-img-container img');

    if(lightboxModal && lightboxImg) {
        productImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxModal.classList.add('active');
                lightboxImg.src = img.src;
            });
        });

        const closeLightbox = () => lightboxModal.classList.remove('active');
        
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxModal.addEventListener('click', (e) => {
            if(e.target === lightboxModal) closeLightbox();
        });
    }
});