import Swiper from 'swiper/bundle';

if (document.querySelector('.index-review__slider'))
{
    new Swiper('.index-review__slider', {
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 80,
            }
        },
        scrollbar: {
            el: '.index-review__scrollbar',
            dragClass: 'slider-scrollbar__drag'
        },
        navigation: {
            prevEl: '.index-review__prev',
            nextEl: '.index-review__next',
            disabledClass: 'slider-scrollbar-str__str_disabled'
        },
    });
}