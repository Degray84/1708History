// МОДУЛЬ ПРОКРУТКИ
function scroll(dist) {
    // Экран перемещается вниз пока отступ от начала экрана до начала документа
    // меньше заданной дистанции прокрутки
    if (window.pageYOffset < dist) {
        let timeOut = setInterval(function () {
            // Проверка: если экран дошел до конца документа, выключить таймер
            if (document.body.scrollHeight <= window.pageYOffset + window.innerHeight) {
                clearInterval(timeOut);
                return false;
            }
            if (window.pageYOffset > dist) {
                clearInterval(timeOut);
                return false;
            } else {
                window.scrollBy(0, 40);
            }
        }, 20)
        // При прокрутке вверх в качестве dist берется расстояние от начала 
        // документа, к которому нужно прокрутить экран.
    } else if (window.pageYOffset > dist) {
        let timeOut = setInterval(function () {
            // Проверка: если экран дошел до начала документа, выключить таймер
            if (window.pageYOffset <= 0) {
                clearInterval(timeOut);
                return false;
            }
            if (window.pageYOffset > dist) {
                window.scrollBy(0, -40);
            } else {
                clearInterval(timeOut);
                return false;
            }
        }, 20)
    } else {
        return false;
    }
}
export {
    scroll
};