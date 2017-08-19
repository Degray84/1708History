import parallax from './modules/_parallax';
import scroll from './modules/_scrollTo';
import slider from './modules/_slider';
import openImg from './modules/_openImg';

if (window.matchMedia("(min-width: 768px)").matches) {
    parallax(); // Загрузка скрипта параллакс-эффекта для устройтв с минимальной шириной экрана 768px
}
scroll(); // Загрузка скрипта прокрутки страницы
slider();//  Загрузка скрипта слайдера
openImg();