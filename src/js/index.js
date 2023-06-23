//import { Fancybox } from "@fancyapps/ui";

import "%modules%/index-main/index-main";
import "%modules%/index-review/index-review";


if (document.querySelector('.js-index-active'))
{
    let blocks = document.querySelectorAll('.js-index-active');

    let blockCount = blocks.length;

    document.querySelector('.nav-index-line__count-full').innerText = (blockCount > 9 ? blockCount : '0' + blockCount);

    function reverseBlocks()
    {
       // if (window.innerWidth < 992) return;

        let scrollDistance = window.scrollY;

        blocks.forEach((el, i) => {

            if (el.offsetTop - 50 <= scrollDistance)
            {
                if (blocks[i].dataset.reverseHeader === 'Y')
                {
                    document.querySelector('.header-main').classList.add('header-main_reverse');
                }
                else
                {
                    document.querySelector('.header-main').classList.remove('header-main_reverse');
                }
            }

            if (el.offsetTop - (window.innerHeight / 2) <= scrollDistance)
            {
                if (scrollDistance == 0) i = 0;

                if (blocks[i].dataset.reverseHeader === 'Y')
                {
                    document.querySelector('.nav-index-line').classList.add('nav-index-line_reverse');
                }
                else
                {
                    document.querySelector('.nav-index-line').classList.remove('nav-index-line_reverse');
                }

                let num = i + 1;

                document.querySelector('.nav-index-line__count-this').innerText = (num > 9 ? num : '0' + num);

                document.querySelector('.nav-index-line__name').innerText = blocks[i].dataset.name;
            }
        });
    }

    window.addEventListener('scroll', reverseBlocks);

    reverseBlocks();
}