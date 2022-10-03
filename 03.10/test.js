let obj1 = {
    a: 500,
    b: 300,
    c: 600,
}

let sum = 0

for(let key in obj1){

    sum += obj1[key]  

}

console.log(sum)

/////////////////////////////////////


let obj2 = {
    a: 500,
    b: 300,
    c: 600,
    d:'Daddy'
}

let sum1 = 0

for(let key in obj2){

    if(typeof obj2[key] === 'number'){
        obj2[key] *= 2
    }

}

console.log(obj2)

///////////////////////////////////////

let calc = {

    a: 5,
    b: 3,
    result: 0,
    
    sumFunc(){
        this.result = this.a + this.b
    },

    minFunc(){
        this.result = this.a - this.b
    },

    upFunc(){
        this.result = this.a * this.b
    },

    downFunc(){
        this.result = this.a / this.b
    },

    showFunc(){
        console.log(this.result)
    }
}

calc.sumFunc()

calc.minFunc()

// calc.upFunc()

// calc.downFunc()

calc.showFunc()


////////////////////////////////////////


let array1 = [10,20,30]

for (let i = 0; i < array1.length; i++){
    console.log(array1[i] * 3)
}

/////////////////////////////////////////
///ерунда//////////////////////
// let array3 = [10,20,30]

// function arraySum(array){

//     let leng = 0

//     for (let i = 0; i < array3.length; i++){
//         leng++
//     }

//     array.slice(0,leng)

//     let summa = array.slice

//     console.log(summa)
// }


// arraySum(array3)

//сделал правильно задание сверху

let fuck = [10,20,30]

let sum5 = 0

for(i = 0; i < fuck.length; i++){
     summa = sum5 += fuck[i]
     console.log(summa)
}



//////дз//////
// набор цифр в массиве. делать через цикл. создаем ячейку для наименьшего числа. и сравниваем его с каждым числом в массиве. если меньеш то остается в  ячейке, если ольше то удаляется и записывается меньшее.




