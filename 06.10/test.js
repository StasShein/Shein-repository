let arr1 = [10,20,30,40]

let arr2 = [10,20,30,40]

function com(arr1,arr2){
    
    let compare = true
    if (arr1.length === arr2.length){
        arr1.forEach((item,index)=>{
            if(item !== arr2[index]){
                compare = false
            }
        })
    }else{
        compare = false
    }
    console.log(compare)
}


com(arr1,arr2)


/////////////////////////////

let info = 
[
    {
        name: 'Stas',
        age: 24,
    },

    {
        name: 'Bogdan',
        age: 16,
    },

    {
        name: "Masha",
        age: 25,
    },

]

info.forEach((item,index) => {
    console.log(item.name)
})

let a = info.map((item)=>item.name)
console.log(a)

////////////////////////////////////////

let age= 
[
    {
        name: 'Stas',
        age: 24,
    },

    {
        name: 'Bogdan',
        age: 15,
    },

    {
        name: "Masha",
        age: 27,
    },
]  

function age1(arr){
    let c  = 0
    age.map(item=>c += item.age / age.length)
    console.log(c)
}

age1(age)

///////////////////////////////////////////


let tel = 
[
    {
        name: 'Stas',
        age: 24,
    },

    {
        name: 'Bogdan',
        age: 15,
    },

    {
        name: "Masha",
        age: 27,
    },
]  

let na = prompt('Ваше имя')
let b = ''

tel.forEach((item)=>{
    if(na === item.name){
        b = prompt('tel')
        item.tel = +b
    }
})

console.log(tel)

///////////////////////////////////////////////
