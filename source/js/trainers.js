import Swiper, {Navigation} from 'swiper';

const swiper = new Swiper('.trainers__slider', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 700,

  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },

    1200: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: '.trainers__slider-button--next',
    prevEl: '.trainers__slider-button--prev',
  },
});

export {swiper};
