// Slider
var swiper = new Swiper(".slider-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  dragCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    500: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2,
    },

    820: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },

    1280: {
      slidesPerView: 3,
    },

    1400: {
      slidesPerView: 3,
    },
  },
});