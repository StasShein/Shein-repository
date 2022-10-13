console.log(document.querySelector('#block1')) ///.nodeType присылает цифру в консоль. каждая цифра имеет свое зхначение, т.е формат вложений

console.log(document.querySelector('#block1').tagName)//возвращает название тэга

console.log(document.querySelector('#block1').nodeName)//возвращает название узла

console.log(document.querySelector('body').innerHTML)//возвращает код данного блока html

//как менять участок html на другой код
//
console.log(document.querySelector('body').innerHTML = '<div> Hello </div>')

//как сделать значения в блоке динамическими
//
let a = 'Hello world'

console.log(document.querySelector('body').innerHTML = `<div>${a}</div>`)

//чтобы просто добавить код а не менять вместо + ставим +=
//
console.log(document.querySelector('body').innerHTML += `<div>${a}</div>`)



console.log(document.querySelector('body').outerHTML)
///
///outer заменяет полностью блок который мы выбрали, а inner меняет только начинку того блока

////
////
////nodeValue и data нужны чтобы получить значения инлайновых тэгов типо span
/// так же 
///


//textContent чтобы получить текст всего узла (Node)
///innerText так же как textContent возвращает весь текст узла (Node) только inner возвращает его как он выглядит в браузере, а 
//textContent возвращает как выглядит в коде
///
///


///скрывать эелементы или блоки можно через функцию hidden = true/false
//
document.querySelector('#block1').hidden = true


///чтобы найти значение атрибута элемента используем getAttribute и его видами
//
console.log(document.querySelector('#img').getAttribute('width')) //получает атрибут

console.log(document.querySelector('#img').setAttribute('width','100px')) // добавляет атрибут

console.log(document.querySelector('#img').hasAttribute()) // узнает есть ли такой атрибут в данном узле

console.log(document.querySelector('#img').removeAttribute()) /// удаляет выбранный атрибут

//////////////////////////////////


///
//создать элемент черещ js
let div = document.createElement('div')

///добавить ему id

div.id = 'block15'

///способы вставить элемент

append(div) //ставит в конец узлов
prepand(div) //ставит в начало узлом
after(div) //стави после узлом выбранным
before(div) //ставит перел узлом выбранным
replaceWith(div) //ставит вместо узла


//////////////////////////////////////////

////заупск функции через определенное время

setTimeout(()=>{},3000) //(callback, time задержки)

////интервал запуска

setInterval(()=>{},time)





