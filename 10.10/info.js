let a = 100.124214

a.toFixed() ////////округляет число. цифра в скобках сколько цифр просле запятой будет использовано

Number.isNaN(a) /////////проверяет является ли элемент NaN
Number.isNaN(a) ///////// проверяет является ли элемент бесконечностью

/////////запись огромных цифр 
let b = 7e9
console.log(b)

//////////////математические функции
 Math.random ////выдает рандом цифру от 0 до 1

 Math.min////наименьшее число
 Math.max////наибольшее число
 Math.pow////степень

 //////////фунции строк

 .length ////длина строк
 
 .charAt()//цифра в скобках выводит букву под этим номером 

 .toLowerCase()////делает все буквы маленькими

 .toUpperCase()////делает все буквы большими

 .trim() ///удаляет пробелы вначале и в конце

/////////способ обращения ко всем типам данных. т.е список функций к ним

String.prototype.


/////DOM

///как достать элементы по айди классу или тэгу

document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('div')

//универсальный способ достать элемент

document.querySelector('#id')('.class')('div')


