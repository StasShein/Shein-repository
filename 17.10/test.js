let el = document.getElementById('root')

// el.style.backgroundColor = 'blue'

// console.log(el.style.backgroundColor)

// console.log(el.classList.add('circle'))

// setTimeout(() => {
//     el.classList.remove('circle')
// }, 2000);

let el2 = document.getElementById('root2')

// el2.classList.add('circle')

let st = getComputedStyle(el)

el2.style.width = st.width
el2.style.height = st.height
el2.style.background = 'linear-gradient(360deg, #129, #734)'
el2.style.borderRadius = st.borderRadius


let scroll = document.getElementById('scroll')


console.log(scroll.offsetWidth-scroll.scrollWidth)

let deg = scroll.getBoundingClientRect()

console.log(scroll.getBoundingClientRect())

console.log('TL ось X: '+deg.top,'ось Y: '+deg.left)
console.log('TR ось X: '+deg.top, 'ось Y: '+deg.right)
console.log('BL ось X: '+deg.bottom, 'ось Y: '+deg.left)
console.log('BR ось X: '+deg.bottom, 'ось Y: '+deg.right)