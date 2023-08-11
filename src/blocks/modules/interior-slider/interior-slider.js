import Swiper from 'swiper/bundle';

if (document.querySelector('.interior-slider__slider'))
{
    new Swiper('.interior-slider__slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 15,
            }
        },
        navigation: {
            prevEl: '.interior-slider__prev',
            nextEl: '.interior-slider__next'
        }
    });
}