import {
    animate
} from './_animation';
// МОДУЛЬ СЛАЙДЕРА
export default function () {
    // Объявление констант
    const firstWork = Array.prototype.slice.call(document.querySelectorAll('.first-work-img')),
        secondWork = Array.prototype.slice.call(document.querySelectorAll('.second-work-img')),
        thirdWork = Array.prototype.slice.call(document.querySelectorAll('.third-work-img')),
        desc = Array.prototype.slice.call(document.querySelectorAll('.slider-desc')),
        activeDesc = document.querySelector('.work_active'),
        leftArrow = document.querySelector('#arrow-down'),
        rightArrow = document.querySelector('#arrow-up');
    // Сдвиг массива второго контейнера изображений
    _shiftArray(secondWork, "left");
    _shiftArray(secondWork, "left");
    // Сдвиг массива третьего контенера изображений
    _shiftArray(thirdWork, "left");
    // Передачи ссылок в массив
    function _pushLinks(wirk1, ...workN) {
        for (let i = 0; i < arguments.length; i++) {
            works.push(arguments[i]);
        }
    }
    // Сдвиг массива на шаг в лево или право
    function _shiftArray(arr, way) {
        if (way == 'left') {
            let first = arr.shift();
            arr.push(first);
        }
        if (way == 'right') {
            let first = arr.pop();
            arr.unshift(first);
        }
    }
    // Привязка ссылок к тегам img
    function _linksInit() {
        for (let i = 0; i < desc.length; i++) {
            if (i == 0) {
                firstWork[i].classList.add('work_active');
                secondWork[i].classList.add('work_active');
                thirdWork[i].classList.add('work_active');
                desc[i].classList.add('work_active');
                animate(firstWork[i], 'zoomInDown', 0.6);
                animate(secondWork[i], 'fadeInDown', 0.6);
                animate(thirdWork[i], 'fadeInUp', 0.6);
                animate(desc[i], 'fadeIn', 0.6);
            } else {
                animate(firstWork[i], 'zoomOutRight', 0.6);
                animate(secondWork[i], 'fadeOutDown', 0.6);
                animate(thirdWork[i], 'fadeOutUp', 0.6);
                desc[i].classList.remove('work_active', 0.6);
                setTimeout(function () {
                    firstWork[i].classList.remove('work_active');
                    secondWork[i].classList.remove('work_active');
                    thirdWork[i].classList.remove('work_active');
                }, 600)
            }
        }
    }
    // Привязка ссылок и сдвиг массива вправо по клику на левую стрелку
    function _leftArrowEvent() {
        leftArrow.addEventListener("click", function (e) {
            e.preventDefault;
            _shiftArray(firstWork, "right");
            _shiftArray(secondWork, "right");
            _shiftArray(thirdWork, "right");
            _shiftArray(desc, "right");
            _linksInit();
        })
    };
    // Привязка ссылок и сдвиг массива влево по клику на правую стрелку
    function _rightArrowEvent() {
        rightArrow.addEventListener("click", function (e) {
            e.preventDefault;
            _shiftArray(firstWork, "left");
            _shiftArray(secondWork, "left");
            _shiftArray(thirdWork, "left");
            _shiftArray(desc, "left");
            _linksInit();
        })
    };
    // Инициализация
    function _init() {
        // _linksInit()
        // _leftArrowEvent()
        // _rightArrowEvent()
    }

    return {
        init: _init()
    }

};