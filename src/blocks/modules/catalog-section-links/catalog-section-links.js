if (document.querySelector('.catalog-section-links__all'))
{
    document.querySelector('.catalog-section-links__all').addEventListener('click', (e) => {

        e.target.closest('.catalog-section-links').classList.toggle('catalog-section-links_open');
    });
}