import Swiper from 'swiper/bundle';

if (document.querySelector('.index-change__slider'))
{
    new Swiper('.index-change__slider', {
        loop: true,
        navigation: {
            prevEl: '.index-change__prev',
            nextEl: '.index-change__next'
        },
        slideActiveClass: 'index-change__slide_active',
        on: {
            init: function () {

                document.querySelector('.index-change__name').innerText = document.querySelector('.index-change__slide_active').dataset.name;
            },
            slideNextTransitionEnd: function () {

                document.querySelector('.index-change__name').innerText = document.querySelector('.index-change__slide_active').dataset.name;
            }
        },
    });
}