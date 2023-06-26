import Swiper from 'swiper/bundle';

if (document.querySelector('.index-cat__slider'))
{
    new Swiper('.index-cat__slider', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 15,
        on: {
            init: function (s) {

                s.slideTo(1, 0);
            }
        },
    });
}