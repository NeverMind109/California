import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination]);

const heroSlider = document.querySelector(".hero__slider");
const heroSliderSpeed = 1500;

document.body.style.setProperty("--hero-slider-speed", heroSliderSpeed + "ms");

const slider = new Swiper(heroSlider, {
  slidesPerView: 1,
  spaceBetween: 100,
  speed: heroSliderSpeed,
  loop: true,
  modules: [Autoplay],
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".hero__pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero__next",
    prevEl: ".hero__prev",
  },
  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll(
        ".hero__pagination .swiper-pagination-bullet"
      );
      paginationBullets.forEach((el) => {
        el.innerHTML = '<span class="hero__bar"></span>';
      });
    },
  },
});
