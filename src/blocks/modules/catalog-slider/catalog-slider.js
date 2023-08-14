import Swiper from 'swiper/bundle';

if (document.querySelector('.catalog-slider__slider'))
{
    if (window.innerWidth > 767)
    {
        new Swiper('.catalog-slider__slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1600: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
            navigation: {
                prevEl: '.catalog-slider__prev',
                nextEl: '.catalog-slider__next'
            }
        });
    }
    else
    {
        document.querySelector('.catalog-slider__wrapper').classList.add('catalog-slider__wrapper_mobile');
    }
}