// МОДУЛЬ PARALLAX-ЭФФЕКТА ПРИ СКРОЛЛЕ
export default function () {
    // Модуль переменщения изображения при прокрутке
    // block - блок изображения
    // windowScroll - величина прокрутки
    // strafeAmount - чувствительность смещения блока изображения
    const trainStart = window.innerHeight;

    function _moveX(block, windowScroll, strafeAmount) {
        // Величина смещение бока изображения
        const strafe = -windowScroll / strafeAmount + '%';
        // Команда смещения блока изображения
        const transformString = 'translate3d(' + strafe + ',0,0)';
        // Смещение блока изображения
        block.style.left = strafe;
        // block.style.transform = transformString;
        // block.style.webkitTransform = transformString;
    };
    // Модуль перемещения изображения hero_bg
    function _scrollmove() {
        const train = document.querySelector('.parallax__train');
        let wScroll = train.getBoundingClientRect().top - trainStart;
        if (train.getBoundingClientRect().top <= trainStart) {
                _moveX(train, wScroll, 6);
        }



    }
    // Инициализация прослушки скролла
    function _init() {
        window.addEventListener("scroll", _scrollmove)
    }
    return {
        init: _init()
    }

};