//  создание функции
//  function имя(){
//     ...тело...
//  }

//  вызов функции

//  имя()

// пример

function ageChanger(){

    console.log('Hello')
}

ageChanger()

function Changer(){

    console.log('Hello')
}

function message(a,b){
    b?? (b = 'Dima Loh')
    console.log('^-^ '+a+': '+b)
}

message('Stas','Hello')
message('Dima','Hello :)')
message('Stas','How are you?')

// задание со звездочкой
// чтобы можно было прописать неограниченное колчиество переменных, нужно написать ...название переменной во всем

// function summa(...args){
//     console.log(args)
// }

// summa(1,2,3,4,5)


function del(a,b){
    return a/b
}

let c = del(10,2)
console.log(c)

function min(a,b){
    if (a>b){
        console.log(b)
    }else{
        console.log(a)
    }
}

min(20,100)

function pow(a,b){
    let res = 1
    for( let c=0; c<b; ++c)
        res*=a;
        console.log(res);
}

pow(4,3)

//callback functions

// function ask(question,yes,no){
//     if(confirm(question)){
//         yes()
//     }else{
//         no()
//     }
// }

// function agree(){
//     alert('1')
// }

// function disagree(){
//     alert('2')
// }

// ask('How?',agree,disagree)


function FizzBuzz(num,del3,del5,delet){
    let a=1
    for(let a=1; a<=num; a++){
        
        if(a % 3 === 0 && a % 5 === 0){
            delet()
        }else if (a % 3 === 0){
            del3()
        } else if(a % 5 === 0){
            del5()
        }else{
            console.log(a)
        }
    }

}

function T(){
    console.log('Fizz');
}

function F(){
    console.log('Buzz');
}

function TF(){
    console.log('FizzBuzz');
}




FizzBuzz(50,T,F,TF)