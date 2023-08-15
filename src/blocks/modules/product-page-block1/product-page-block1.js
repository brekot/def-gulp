import Swiper from 'swiper/bundle';

if (document.querySelector('.product-page-block1__slider'))
{
    new Swiper('.product-page-block1__slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            prevEl: '.product-page-block1__prev',
            nextEl: '.product-page-block1__next'
        }
    });
}