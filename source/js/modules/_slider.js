import {
    animate
} from './_animation';
// МОДУЛЬ СЛАЙДЕРА
export default function () {
    // Объявление констант
    const slides = Array.prototype.slice.call(document.querySelectorAll('.content-desc_slider'));

    function _listeners() {
        for (let i = 0; i < slides.length; i++) {
            let bubbles = Array.prototype.slice.call(slides[i].querySelectorAll('.bubbles__item'));
            let after = Array.prototype.slice.call(slides[i].querySelectorAll('.content-desc__text_after'));
            console.log(after);
            for (let a = 0; a < bubbles.length; a++) {
                bubbles[a].addEventListener('click', function () {
                    let sls = slides[i].querySelectorAll('.content-desc__text');
                    for (let s = 0; s < bubbles.length; s++) {
                        sls[s].classList.add('content-desc__text_unActive');
                        sls[a].classList.remove('content-desc__text_unActive');
                        bubbles[s].classList.remove('bubbles__item_active');
                        bubbles[a].classList.add('bubbles__item_active');
                    }
                })
            }
            for (let a = 0; a < after.length; a++) {
                after[a].addEventListener('click', function () {
                    let sls = slides[i].querySelectorAll('.content-desc__text');
                    for (let s = 0; s < bubbles.length; s++) {
                        sls[s].classList.add('content-desc__text_unActive');
                        sls[a + 1].classList.remove('content-desc__text_unActive');
                        bubbles[s].classList.remove('bubbles__item_active');
                        bubbles[a + 1].classList.add('bubbles__item_active');
                    }
                })

            }
        }
    }

    function _slider() {

    }

    function _init() {
        _listeners()
    }

    return {
        init: _init()
    }

};