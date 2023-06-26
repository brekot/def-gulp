import Swiper from 'swiper/bundle';

if (document.querySelector('.index-salons__slider'))
{
    new Swiper('.index-salons__slider', {
        loop: true,
        navigation: {
            prevEl: '.index-salons__prev',
            nextEl: '.index-salons__next'
        },
        slideActiveClass: 'index-salons__slide_active',
        on: {
            init: function () {

                document.querySelector('.index-salons__name').innerText = document.querySelector('.index-salons__slide_active').dataset.name;
            },
            slideNextTransitionEnd: function () {

                document.querySelector('.index-salons__name').innerText = document.querySelector('.index-salons__slide_active').dataset.name;
            }
        },
    });
}