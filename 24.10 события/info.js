//виды событий для мыши:
node.addEventListener('click')//обычный клик ЛКМ
node.addEventListener('dblclick')//событие по двойному клику ЛКМ
//
node.addEventListener('contextmenu') //событие по ПКМ
//
node.addEventListener('mouseover')//вызывается когда мышка заходит на переделы блока
node.addEventListener('mouseout')//вызывается когда мышь выходит за пределы объекта
//
node.addEventListener('mouseenter')//аналоги вышеперечисленных событий
node.addEventListener('mouseout')//
//
node.addEventListener('mousedown')//вызывается когда зажимаешь и держишь мышь на объекте
node.addEventListener('mouseup')//вызывается когда поднимаешь зажатую кнопку мыши над объектом
//
node.addEventListener('mousemove')//вызывается при движении  мыши по объекту
//
node.addEventListener('mousedown',(e)=>{console.log(e.button)})//.button покажет какой именно кнопкой мыши было нажатие на объект 0 - ЛКМ; 1- колесико; 2-ПКМ ;
//
node.addEventListener('mousedown',(e)=>{console.log([e.button,e.shiftKey,e.altKey,e.ctrlKey])})//показывают какое нажатие было ЛКМ, с shift, с ctrl, с alt.
//
//координаты клика 
node.addEventListener('click',(e)=>{console.log(e.clientX,e.clientY,e.pageX,e.pageY)})//первые две координаты относительно окна, две вторые относитеьно странице
//


///////////////////////////////////////////////////

///////////////события клавиатуры:
document.addEventListener('keydown')//вызывается при нажатии клавиш клавиатуры. можно увидеть какую именно кнопку нажал пользователь
document.addEventListener('keyup')
//////////////////////////////////

//////события input:
node.addEventListener('change')///вызывается при окончание ввода в окно input
//
node.addEventListener('input')///срабатывает при вводе каждого символа в input
//
node.addEventListener('cut')//срабаывают при совершение соответствующих действий
node.addEventListener('copy')
node.addEventListener('paste')
//
node.addEventListener('focus')///срабатывает при фокусе и разфокусе на input-е
node.addEventListener('blur')
//

