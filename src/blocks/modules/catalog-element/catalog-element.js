if (document.querySelector('.catalog-element-consumption__open'))
{
    document.querySelector('.catalog-element-consumption__open').addEventListener('click', (e) => {

        let elem = e.target;

        elem.classList.toggle('btn-two_active');

        slideToggle(elem.nextElementSibling, 300);
    });

    document.querySelector('.catalog-element-color__open').addEventListener('click', (e) => {

        let elem = e.target.closest('.catalog-element-color__open');

        elem.classList.toggle('btn-two_active');

        slideToggle(elem.closest('.catalog-element-color__inner').nextElementSibling, 300);
    });
}