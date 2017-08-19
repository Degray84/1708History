// МОДУЛЬ PARALLAX-ЭФФЕКТА ПРИ СКРОЛЛЕ
export default function () {
    // Модуль переменщения изображения при прокрутке
    // block - блок изображения
    // windowScroll - величина прокрутки
    // strafeAmount - чувствительность смещения блока изображения
    const stations = document.querySelectorAll('.parallax__station');
    const trains = document.querySelectorAll('.parallax__train');
    const bgWidth = trains[0].closest('div');
    const delay = 0.4;
    // trains[1].style.left = -(trains[1].offsetWidth / 2) / bgWidth.offsetWidth * 100 + "%";

    function _scrollmove() {
        for (let i = 0; i < stations.length; i++) {
            let startY1 = trains[i].getBoundingClientRect().bottom + pageYOffset - window.innerHeight;
            let stopY1 = trains[i].getBoundingClientRect().bottom + pageYOffset - window.innerHeight * 0.8;
            let startY2 = trains[i].getBoundingClientRect().bottom + pageYOffset - window.innerHeight * (0.8 - delay);
            let stopY2 = trains[i].getBoundingClientRect().bottom + pageYOffset;
            let speed;
            if (stations[i].classList.contains('parallax__station_left') && stations[i].classList.contains('parallax__station_1')) {
                speed = window.innerHeight / 186;
            }
            if (stations[i].classList.contains('parallax__station_right') && stations[i].classList.contains('parallax__station_1')) {
                speed = window.innerHeight / 350;
            }
            if (stations[i].classList.contains('parallax__station_left') && stations[i].classList.contains('parallax__station_2')) {
                speed = window.innerHeight / 160;
            }
            if (stations[i].classList.contains('parallax__station_right') && stations[i].classList.contains('parallax__station_2')) {
                speed = window.innerHeight / 320;
            }
            if (stations[i].classList.contains('parallax__station_left') && stations[i].classList.contains('parallax__station_3')) {
                speed = window.innerHeight / 160;
            }
            if (stations[i].classList.contains('parallax__station_right') && stations[i].classList.contains('parallax__station_3')) {
                speed = window.innerHeight / 330;
            }
            if (pageYOffset >= startY1 && pageYOffset < stopY1) {
                let road = ((pageYOffset - startY1) / speed) - 10 + "%";
                trains[i].style.left = road;
                trains[i].style.transform = 'translate3d(' + road + ',0,0)';
                trains[i].style.webkitTransform = 'translate3d(' + road + ',0,0)';
            }
            if (pageYOffset >= startY2 && pageYOffset < stopY2) {
                let road = ((pageYOffset - window.innerHeight * delay - startY1) / speed) - 10 + "%";
                trains[i].style.left = road;
                trains[i].style.transform = 'translate3d(' + road + ',0,0)';
                trains[i].style.webkitTransform = 'translate3d(' + road + ',0,0)';
            }
        };
    }

    function _init() {
        console.log(window.innerHeight);
        window.addEventListener("scroll", _scrollmove)
    }
    return {
        init: _init()
    }

};