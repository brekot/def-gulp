if (document.querySelector('.catalog-element-tabs__link'))
{
    document.querySelectorAll('.catalog-element-tabs__link').forEach((e) => {

        e.addEventListener('click', (e) => {

            let elem = e.target;

            if (document.querySelector('.catalog-element-tabs__link_active')) document.querySelector('.catalog-element-tabs__link_active').classList.remove('catalog-element-tabs__link_active');
    
            elem.classList.add('catalog-element-tabs__link_active');

            if (document.querySelector('.catalog-element-tabs__item_active')) document.querySelector('.catalog-element-tabs__item_active').classList.remove('catalog-element-tabs__item_active');

            document.querySelector('.catalog-element-tabs__item[data-tab="' + elem.dataset.tab + '"]').classList.add('catalog-element-tabs__item_active');
        });
    });
}