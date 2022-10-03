// способы записи функций

// function func(){

// }

// let func = function(a,b){
//     return 10
// }

// let func = (a,b) => a+b

// 2 и 3 запись одинаковые 

// let ask = (question, yes, no) =>{
// if(confirm(question))
// yes()
// else no()
// }


// ask(
// 'SURE?',
// ()=>{alert('YES')}, 
// ()=>{alert('NO')}
// )



// let obj = new Object()
// let obj = Object.create()

// let obj = {
//     'my name':'Stas',
//     surname:'Shein',
//     age:24,

// }

// console.log(obj.age)
// console.log(obj['my name'])
// console.log(obj.surname)

// obj.year = 2022

// console.log(obj.year)

// delete obj.year

// console.log(obj.year)

// 1 вариант
// let user = {
//     name:'Stas',
//     surname:'Shein',
//     age:24,
// }

// console.log(user.name, user.surname)

// user.name = 'Dima'
// user.surname = 'Pazdnikov'

// console.log(user.name, user.surname)

// delete user.name
// delete user.surname

// console.log(user.name, user.surname)

// 2 вариант
// let user2 ={}
// user.name = 'STAS'
// user.surname = 'Shein'
// user.name = 'DIMA'
// delete user.name

// for (key in user){
//     console.log(key)
//     console.log(user[key])
// }


// let prices = {
//     milk:1000,
//     bread:300,
//     phone: 50000,
// }

// let price = {
//     milk:100000,
//     bread:300,
//     phone: 50000,
// }

// let sum = 0

// for(key in prices){
//     sum += prices[key]
//     console.log (sum)
// }

// let b = 0

// let summa = (obj)=>{
//     for(key in obj){
//         b += obj[key]
        
//     }
//     console.log (b)
// }

// summa(price)




// пытался сделать сам бред
// for (product in prices){

//     let a = Number(prices.milk)+Number(prices.bread)+Number(prices.phone)
//     console.log(a)
    
// }

// let a = Number(prices.milk)+Number(prices.bread)+Number(prices.phone)
//     console.log(a)

// function summa(a){
    
// }


// let object = {
//     milk:100,
//     bread:75,
//     phone: 49999,
//     text:'a',
//     word:'bad',
// }

// console.log (object)

// let a =100000

// function summa(obj){
    
//     let summa = 0

//     for(key in obj){

//          if (typeof obj[key] === 'number'){
//             summa += obj[key]
//         }

//     }
//     return summa 
// }

// console.log(summa(object))

// console.log(a+summa(object))

let object = {
    milk:100,
    bread:75,
    phone: 49999,
    text:'a',
    word:'bad',
    year:'2022'
}

console.log (object)

let a =100000

function summa(obj){
    
    let summa = 0

    for(key in obj){

         if (typeof obj[key] === 'number'){
            summa += obj[key]
         }else{
            if(+obj[key] !== 'NaN'){
                summa += +obj[key]
            }
            
         }

    }
    return summa 
}

console.log(summa(object))
