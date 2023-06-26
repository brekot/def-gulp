import Swiper from 'swiper/bundle';

if (document.querySelector('.index-crash__slider'))
{
    if (document.querySelectorAll('.index-crash__slide').length > 1)
    {
        new Swiper('.index-crash__slider', {
            loop: true,
            navigation: {
                prevEl: '.index-crash__prev',
                nextEl: '.index-crash__next'
            },
        });
    }
    else
    {
        document.querySelector('.index-crash__str').remove()
    }
}