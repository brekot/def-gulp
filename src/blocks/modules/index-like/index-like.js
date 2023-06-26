import Swiper from 'swiper/bundle';

if (document.querySelector('.index-like__slider'))
{
    new Swiper('.index-like__slider', {
        loop: true,
        navigation: {
            prevEl: '.index-like__prev',
            nextEl: '.index-like__next'
        }
    });
}