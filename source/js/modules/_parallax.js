// МОДУЛЬ PARALLAX-ЭФФЕКТА ПРИ СКРОЛЛЕ
export default function () {
    // Модуль переменщения изображения при прокрутке
    // block - блок изображения
    // windowScroll - величина прокрутки
    // strafeAmount - чувствительность смещения блока изображения
    const stations = document.querySelectorAll('.parallax__station');
    const trains = document.querySelectorAll('.parallax__train');
    const bgWidth = trains[0].closest('div');
    // Разбиваем окно по высоте на 3 сегмента: Поезд приезжает на станцию, поезд стоит, поезд уезжает.
    // let stationPosition = (stations[0].offsetLeft - trains[0].offsetWidth / 2) / bgWidth.offsetWidth * 100 + "%";
    // let trainPosition = (stations[1].offsetLeft - trains[1].offsetWidth / 2) / bgWidth.offsetWidth * 100 + "%";
    // trains[0].style.left = stationPosition + "px";
    // console.log(trains[0].offsetLeft);
    // trains[0].style.left = (stations[0].offsetLeft - trains[0].offsetWidth / 2) / bgWidth.offsetWidth * 100 + "%";
    // trains[1].style.left = (stations[1].offsetLeft - trains[1].offsetWidth / 2) / bgWidth.offsetWidth * 100 + "%";
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
                speed = 4.5;
            }
            if (stations[i].classList.contains('parallax__station_right') && stations[i].classList.contains('parallax__station_1')) {
                speed = 2.3;
            }
            if (stations[i].classList.contains('parallax__station_left') && stations[i].classList.contains('parallax__station_2')) {
                speed = 5;
            }
            if (stations[i].classList.contains('parallax__station_right') && stations[i].classList.contains('parallax__station_2')) {
                speed = 2.8;
            }
            if (stations[i].classList.contains('parallax__station_left') && stations[i].classList.contains('parallax__station_3')) {
                speed = 5.3;
            }
            if (stations[i].classList.contains('parallax__station_right') && stations[i].classList.contains('parallax__station_3')) {
                speed = 2.8;
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
        window.addEventListener("scroll", _scrollmove)
    }
    return {
        init: _init()
    }

};