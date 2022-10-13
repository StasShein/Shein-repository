// document.querySelector('#img').innerHTML += '<img style = "width: 200px; height: 200px;" src="../../form.png" alt="form">';

///////////////////////////////////////////////////////

// console.log(document.querySelector('div').outerHTML)

// console.log(document.querySelector('div').getAttribute('data-widget-name'))

// console.log(document.querySelector('[data-widget-name]').getAttribute('data-widget-name'))


let a = document.createElement('div')

a.id = 'parent'

a.style = 'border:3px solid green; margin:10px;'

let b = document.createElement('div')

b.id = 'firstChild'

b.setAttribute('class','child')

b.innerText = 'First Child Text'

let c = document.createElement('div')

c.id = 'lastChild'

c.setAttribute('class','child')

let d = document.createElement('div')

d.setAttribute('class','child')

let e = document.createElement('div')

e.style = 'width:30px; height:30px; border-radius:10px'

e.setAttribute('class','child')

document.body.append(a)

a.append (b)

a.append (c)

c.append(d)

d.append(e)

console.log(document.body)

















