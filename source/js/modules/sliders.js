import Swiper from 'swiper/core/core';
import Navigation from 'swiper/modules/navigation/navigation';

const initSliders = () => {
  const slider = new Swiper('.trainers__slider', {
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

  const carousel = new Swiper('.reviews__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,

    navigation: {
      nextEl: '.reviews__slider-button--next',
      prevEl: '.reviews__slider-button--prev',
    },
  });

  return () => {
    return {slider, carousel};
  };
};

export {initSliders};
