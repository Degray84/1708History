// МОДУЛЬ АНИМАЦИИ
// content - элемент, который будет анимироваться
// type - тип анимации из animate.css
// list - массив элементов, к которым поочередно будет применяться animate
// speed - скорость анимации
// Осноная функция анимации
function animate(content, type, speed) {
    // Добваляются классы к элементу content
    content.classList.add('animated');
    content.style = `animation-duration: ${speed}s;
    -webkit-animation-duration: ${speed}s;`;
    content.classList.add(type);
    // Удаляются классы через 1 сек
    setTimeout(function () {
        content.classList.remove(type);
        content.classList.remove('animated');
    }, speed * 1000)
}
// Функция анимации элементов массива
function animateList(list, type, speed) {
    let i = 0;
    (function aniList() {
        // Определяется длина массива 
        const iMax = list.length - 1;
        // Показывается элемент массива, если он скрыт
        list[i].style.display = 'block';
        // Анимируется элемент массива
        animate(list[i], type, speed)
        // Выставляется задержка между анимациями элементов массива
        setTimeout(function () {
            // Каждые 0.15 сек вызывается функция aniList 
            // пока счетчик не дойдет до конца массива
            if (i < iMax) {
                i++;
                aniList();
            }
        }, 150);
    }())
}
// Функция анимации при видимости элемента
function aniScreen(typeIn, typeOut, speed) {
    const aniContent = document.querySelectorAll('.aniScreen');
    document.addEventListener("scroll", function () {
        if (!aniContent) {
            return false;
        } else {
            for (let i = 0; i < aniContent.length; i++) {
                let topDoc = aniContent[i].getBoundingClientRect().top,
                    offset = 0.90 * document.documentElement.clientHeight;
                console.log(topDoc-offset);
                aniContent[i].classList.remove("aniScreen")
                if (topDoc - offset <= 0) {
                    if (!aniContent[i].classList.contains("aniScreen")) {
                        aniContent[i].classList.add("aniScreen");
                    }
                } if(topDoc - offset > 0) {
                    aniContent[i].classList.remove("aniScreen")
                };
            }
        }
    })
}

export {
    animate,
    animateList,
    aniScreen
};