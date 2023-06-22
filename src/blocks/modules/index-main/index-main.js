import Swiper from 'swiper/bundle';

if (document.querySelector('.index-main__slider'))
{
    if (document.querySelectorAll('.index-main__slide').length > 1)
    {
        new Swiper('.index-main__slider', {
            loop: true,
            navigation: {
                prevEl: '.index-main__prev',
                nextEl: '.index-main__next'
            },
        });
    }
    else
    {
        document.querySelector('.index-main__str').remove()
    }
}