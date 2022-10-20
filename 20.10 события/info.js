//события вызывваются каким-то действием в браузере все события начинается с 'on'

//еще один способ записать событие
node.addEventListener('click',()=>alert('i'))//еще один способ записать событие

node.addEventListener('click',()=>node.innerText = 'Hello')

/////////////////////////////

//удалить событие
node.removeEventListener('click',FuncName())


/////////////
//список событий
node.addEventListener('DOMcontentLoaded',()=>{})
node.addEventListener('transitionend',()=>{})

///////способ вызвать событие
onclick = ""  //в HTML
//
node.onclick = () =>  alert('Hello')
//
node.addEventListener('click',()=>alert('i'))
//////////////////
