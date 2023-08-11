if (document.querySelector('.select-type'))
{
    document.querySelectorAll('.select-type').forEach((e) => {

        e.addEventListener('click', (e) => {

            e.target.closest('.select-type').classList.toggle('select-type_open');
        });
    });

    document.querySelectorAll('.select-type__item').forEach((e) => {

        e.addEventListener('click', (e) => {

            let item = e.target,
                block = item.closest('.select-type');

            block.querySelector('.select-type__name').innerText = item.innerText;

            block.querySelector('.select-type__input').value = item.value;
        });
    });
}