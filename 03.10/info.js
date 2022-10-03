let a = {}
Object.create(null,{})
let obj = new Object()
// Способы создания объектов




// копирование объектов
let b = {...a}
Object.assign(b,a)




JSON.stringify //преобразует объект в строку
JSON.parse //преобразует строку в объект




Object.keys(a) //возвращает набор ключей из массива
Object.values(a) //возвращает значения ключей из массива




//методы объекта
let c = {
    a:10,  //свойство
    obj:{
        name:'Stas' //свойство,
    },
    func:function(){  //метод
        console.log('method')
    },
    //короткий способ записи функции в объект
    //имя(){}
    newFunc(){
        console.log(this.obj)
    },         //this можно использоваьб чтобы обращатсья к объекту который функция обрабатывает
}

c.newFunc()


/////ПРИМЕР ПРИМЕНЕНИЯ this/////////////

let n = {
    num:0,
    addFunc(){
        this.num++
    },
    showFunc(){
        console.log(this.num)
    }
}

n.addFunc()
n.addFunc()
n.addFunc()
n.addFunc()
n.showFunc()

//////////////////////////////////////////////////////

  //МАССИВ
let array = [10,20,30]

//значения массива можно выбирать по нумерации js автоматически их нумерует от 0 до бесконечнности

console.log(array[0])

for (let i = 0; i < array.length; i++){
    console.log(i)
}



//найти индекс значения которое мы знаем

console.log(array.indexOf(20))



//как добавить в массив значения

array.push(40,50) //добавление в конец массива значения в скобках

array.pop() //удалить последний элемент массива

array.shift() //удаляет первый элемент

array.unshift() //добавляет значение в начало

array.splice() //удаляет выбранный элемент по 2 цифрам (индекс числа с которого начнется удаление, воторое число сколько чисел удалить)

array.slice() //вырезает промежуток цифр(1 цифра начало отрезка вырезки, 2 цифра конец отрезка вырезки)

//пример слайса//////////////////////////////////////////

array.slice(1,3) //вырезаем цифры с индексом 1 2 3
let cut = array.slice(1,3) //всталвем в другой элемент




