if (document.querySelector('.catalog-count'))
{
    document.querySelectorAll('.catalog-count__btn_minus').forEach((e) => {

        e.addEventListener('click', (e) => {

            let elem = e.target,
                block = elem.closest('.catalog-count'),
                input = block.querySelector('.catalog-count__input'),
                value = parseInt(input.value),
                min = input.dataset.min ?? 0;

            value -= 1;

            if (value < min) value = min;

            input.value = value;
        });
    });

    document.querySelectorAll('.catalog-count__btn_plus').forEach((e) => {

        e.addEventListener('click', (e) => {

            let elem = e.target,
                block = elem.closest('.catalog-count'),
                input = block.querySelector('.catalog-count__input'),
                value = parseInt(input.value),
                max = input.dataset.max ?? 100000;

            value += 1;

            if (value > max) value = max;

            input.value = value;
        });
    });
}