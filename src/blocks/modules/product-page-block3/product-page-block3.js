import Swiper from 'swiper/bundle';

if (document.querySelector('.product-page-block3__slider'))
{
    new Swiper('.product-page-block3__slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            prevEl: '.product-page-block3__prev',
            nextEl: '.product-page-block3__next'
        }
    });
}