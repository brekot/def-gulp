import Swiper from 'swiper/bundle';

if (document.querySelector('.index-salons__slider'))
{
    new Swiper('.index-salons__slider', {
        loop: true,
        navigation: {
            prevEl: '.index-salons__prev',
            nextEl: '.index-salons__next'
        },
    });
}