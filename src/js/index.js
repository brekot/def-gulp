//import { Fancybox } from "@fancyapps/ui";

import "%modules%/index-main/index-main";

if (document.querySelector('.js-index-active'))
{
    function reverseBlocks()
    {
        if (window.innerWidth < 768) return;

        let scrollDistance = window.scrollY;

        let blocks = document.querySelectorAll('.js-index-active');

        blocks.forEach((el, i) => {

            if (el.offsetTop - 50 <= scrollDistance)
            {
                /* blocks.forEach((el) => {

                    if (el.classList.contains('work-step__item_active'))
                    {
                        el.classList.remove('work-step__item_active');
                    }
                });

                blocks[i].classList.add('work-step__item_active'); */

                if (blocks[i].dataset.reverseHeader === 'Y')
                {
                    document.querySelector('.header-main').classList.add('header-main_reverse');
                }
                else
                {
                    document.querySelector('.header-main').classList.remove('header-main_reverse');
                }
            }
        });
    }

    window.addEventListener('scroll', reverseBlocks);

    reverseBlocks();
}