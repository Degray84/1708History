import {
    scroll
} from './_scrollBy';
import {
    animate
} from './_animation';
// МОДУЛЬ ПРОКРУТКИ
export default function () {
    // Объявление констант
    const dates = document.querySelector('.dates-list'),
        dateList = Array.prototype.slice.call(dates.querySelectorAll('.dates-list__item')),
        contentList = Array.prototype.slice.call(document.querySelectorAll('.content-list__item'));
    const dateAllList = document.querySelector('.main__dates');
    const dateButton = document.querySelector('.dates-button');

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

    function swipe() {
        let initialPoint,
            finalPoint;
        document.addEventListener('touchstart', function (event) {
            event.stopPropagation();
            initialPoint = event.changedTouches[0];
        }, false);
        document.addEventListener('touchend', function (event) {
            event.stopPropagation();
            finalPoint = event.changedTouches[0];
            let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX),
                yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
            if (xAbs > 40 || yAbs > 40) {
                if (xAbs > yAbs) {
                    if (finalPoint.pageX < initialPoint.pageX) {
                        /*СВАЙП ВЛЕВО*/
                        dateAllList.classList.remove('main__dates_active');
                        if (dateAllList.classList.contains('main__dates_active')) {
                            animate(dateAllList, 'bounceInLeft');
                        } else {
                            animate(dateAllList, 'bounceOutLeft');
                        }
                    } else {
                        /*СВАЙП ВПРАВО*/
                        dateAllList.classList.add('main__dates_active');
                        if (dateAllList.classList.contains('main__dates_active')) {
                            animate(dateAllList, 'bounceInLeft');
                        } else {
                            animate(dateAllList, 'bounceOutLeft');
                        }
                    }
                } else {
                    return false;
                }
            }

        }, false);
    }

    function _datesShow() {

        dateButton.addEventListener('click', function () {

            dateAllList.classList.toggle('main__dates_active');
            if (dateAllList.classList.contains('main__dates_active')) {
                animate(dateAllList, 'bounceInLeft');
            } else {
                animate(dateAllList, 'bounceOutLeft');
            }

        })
    }

    function _init() {
        swipe()
        _datesShow()
        _datesOffset()
        _setUpListenters()
    }
    return {
        init: _init()
    }

};