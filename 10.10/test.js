console.log(document.body.childNodes)

// document.body.childNodes[1].firstChild.style.backgroundColor = 'red'

document.body.childNodes[3].style.backgroundColor = 'blue'

document.body.childNodes[5].style.backgroundColor = 'green'

document.getElementById('block2').style.backgroundColor = 'pink'

document.getElementById('block2').childNodes[1].style.backgroundColor = 'red'

let a = document.getElementsByClassName('block1')

console.log(a[0])

// a[0].style.backgroundColor = 'lime'

// a[0].style.border = '2px  double black'

for(key of a){
    key.style.backgroundColor ='lime'
    key.style.border = '10px double black'
}


console.log(document.querySelector('#block2'))

console.log(document.querySelector('#block4.block4'))



// помощьс домашкой

// функция вернуть текст из блока
 
.innerText