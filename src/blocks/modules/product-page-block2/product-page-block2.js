import Swiper from 'swiper/bundle';

if (document.querySelector('.product-page-block2__slider'))
{
    new Swiper('.product-page-block2__slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            prevEl: '.product-page-block2__prev',
            nextEl: '.product-page-block2__next'
        }
    });
}