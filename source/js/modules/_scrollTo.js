import {
    scroll
} from './_scrollBy';
// МОДУЛЬ ПРОКРУТКИ
export default function () {
    // Объявление констант
    const dates = document.querySelector('.dates-list'),
        dateList = Array.prototype.slice.call(dates.querySelectorAll('.dates-list__item')),
        contentList = Array.prototype.slice.call(document.querySelectorAll('.content-list__item'));

    function _setUpListenters() {
        const datesOffset = dates.getBoundingClientRect().top - 10;
        window.addEventListener('scroll', function () {
            // Добавляется переменная, которая определяет расстояние от секции блога до верхней границы документа, 
            // добавляет меню fixed, если выходит за границы значения и убирает fixed, если заходит обратно
            let menuOffset = dates.getBoundingClientRect().top;
            if (menuOffset <= 10) {
                dates.classList.add('dates-list_fixed');
            }
            if (pageYOffset < datesOffset) {
                dates.classList.remove('dates-list_fixed');
            }
            _datesOffset();
        })
    }

    //Проходится по массиву статей, определяет положение относительно отображения,
    //добавляет активный класс, если статья в зоне видимости, убирает активный класс у остальных
    function _datesOffset() {
        for (let i = 0; i < contentList.length; i++) {
            // Расстояние от начала статьи до верхней части экрана
            let contentOffset = contentList[i].getBoundingClientRect().top,
                // Центр экрана
                offsetPoint = window.innerHeight / 2,
                activList = dateList[i];
            activList.onclick = function () {
                let pageOffset = contentList[i].getBoundingClientRect().top + pageYOffset - window.innerHeight / 6;
                return scroll(pageOffset);
            };
            if (contentOffset <= offsetPoint) {
                for (let a = 0; a < contentList.length; a++) {
                    dateList[a].classList.remove('dates-list__item_active');
                    dateList[i].classList.add('dates-list__item_active');
                }
            }

        }
    }

    function _init() {
        _datesOffset()
        _setUpListenters()
    }
    return {
        init: _init()
    }

};