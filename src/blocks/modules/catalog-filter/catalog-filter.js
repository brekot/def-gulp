document.querySelectorAll('.catalog-filter__name').forEach((e) => {

    e.addEventListener('click', (e) => {

        e.target.classList.toggle("catalog-filter__name_open");

        slideToggle(e.target.nextElementSibling, 300);
    });
});

if (document.querySelector('.catalog-filter__opener'))
{
    document.querySelector('.catalog-filter__opener').addEventListener('click', (e) => {

        let elem = e.target.closest('.catalog-filter__opener');

        elem.classList.toggle("catalog-filter__opener_open");

        slideToggle(elem.previousElementSibling, 300);
    });
}