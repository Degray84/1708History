import {
    animate
} from './_animation';
// МОДУЛЬ СЛАЙДЕРА
export default function () {
    // Объявление констант
    const sImgs = Array.prototype.slice.call(document.querySelectorAll('.smallImg'));
    const bImgs = Array.prototype.slice.call(document.querySelectorAll('.bigImg'));

    function _listeners() {
        for (let i = 0; i < bImgs.length; i++) {
            sImgs[i].addEventListener('click', function (e) {
                e.preventDefault();
                bImgs[i].style.display = 'block';
                animate(bImgs[i], 'zoomInLeft');
                document.body.style.overflow = 'hidden';
                document.body.style.marginLeft = '-17px';

            })
            bImgs[i].addEventListener('click', function (e) {
                e.preventDefault();

                document.body.style.overflow = '';
                document.body.style.marginLeft = '';
                animate(bImgs[i], 'zoomOutRight');
                setTimeout(function(){bImgs[i].style.display = 'none'}, 1000)
            })
        }
    }

    function _init() {
        _listeners()
    }

    return {
        init: _init()
    }

};