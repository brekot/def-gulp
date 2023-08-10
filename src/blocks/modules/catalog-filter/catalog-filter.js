document.querySelectorAll('.catalog-filter__name').forEach((e) => {

    e.addEventListener('click', (e) => {

        e.target.classList.toggle("catalog-filter__name_open");

        slideToggle(e.target.nextElementSibling, 300);
    });
});