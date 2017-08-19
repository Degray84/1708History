// МОДУЛЬ АНИМАЦИИ
// content - элемент, который будет анимироваться
// type - тип анимации из animate.css
// list - массив элементов, к которым поочередно будет применяться animate
// speed - скорость анимации
// Осноная функция анимации
function animate(content, type) {
    // Добваляются классы к элементу content
    content.classList.add('animated');
    content.classList.add(type);
    // Удаляются классы через 1 сек
    setTimeout(function () {
        content.classList.remove(type);
        content.classList.remove('animated');
    }, 1000)
}
export {
    animate
};