<a href="https://brekot.github.io/def-gulp/">Главная страница</a><br>
<a href="https://brekot.github.io/def-gulp/sections.html">Список разделов</a><br>
<a href="https://brekot.github.io/def-gulp/section.html">Список товаров</a><br>
<a href="https://brekot.github.io/def-gulp/product.html">Страница товара</a><br>

<hr>

Папка /docs - для разработчика. Содержит готовые файлы верски. Остальные файлы и папки служебные.

<hr>

<b>Подключены в JS:</b><br>
<ul>
    <li>Swiper - для слайдеров (https://swiperjs.com/)</li>
    <li>Fancybox - для окон (https://fancyapps.com/)</li>
</ul>

<hr>

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/)
* установите глобально:
    * [Yarn](https://yarnpkg.com/getting-started): ```npm i -g yarn```
    * [Gulp](https://gulpjs.com/): ```npm i -g gulp```
    * [Bem Tools](https://www.npmjs.com/package/bem-tools-core): ```npm i -g bem-tools-core```
* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/andreyalexeich/gulp-scss-starter.git```
* перейдите в скачанную папку со сборкой: ```cd gulp-scss-starter```
* введите ```yarn set version berry```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)
* ```yarn run bem-m my-block``` - для создания БЭМ-блока