let node = document.getElementById('root')

// function addAlert(){
//     alert('Hello')
// }

// setTimeout(addAlert,3000)

// node.addEventListener('mouseover',alert)

// let a = document.body.addEventListener('mousemove')
// console.log(a)
///////////////////////////попытка была///////////////////////////////////////////////////////////////////////////////////////
// let check = false;

// node.addEventListener('mouseenter', ()=>{
//     check = true
//     setTimeout(()=>{
//         if(check){
//             node.style.backgroundColor = 'red'
//         }
//     },3000)
// })

// node.addEventListener('mouseleave',()=>{check=false})
//////////////////////////////////решение////////////////////////////////////////////////////////////////////

//////////////////////////////////решение второй задачки//////////////////////////////////////////////////////////////////////////
// node.addEventListener('mousedown',(e)=>{

//     let a = e.clientY - node.getBoundingClientRect().top
//     let b = e.clientX - node.getBoundingClientRect().left

//     if(e.ctrlKey){
//     function mouseMove(e){
//         node.style.top = e.pageY - a +'px'
//         node.style.left = e.pageX - b +'px'
//     }

//     document.addEventListener('mousemove',mouseMove)
//     document.addEventListener('mouseup',()=>{
//         document.removeEventListener('mousemove',mouseMove)})}
// })


/////////////////////////////////////попытка третье задачки//////////////////////////////////////////////////////

let main = document.getElementById('loading')

let load = document.getElementById('procent')

load.addEventListener('mousedown',(e1)=>{
    
   if(e1.clientX <= main.getBoundingClientRect().width) ///изменить в иф условие поставить первыми координаты ползунка а не координаты моего клика
    function mouseMove(e){
        load.style.left = e.pageX+'px'
        load.innerHTML = `<p> ${e.pageX/(main.getBoundingClientRect().width-5) *100}</p>`
    }

    document.addEventListener('mousemove',mouseMove)
    document.addEventListener('mouseup',()=>{
        document.removeEventListener('mousemove',mouseMove)})
    
    }
    )

/////////////////////////////////////использовать для проекта. реклама лабиринт/////////////////////////////////////////////////////////////

document.addEventListener('keydown',(e)=>{
    if(e.code === 'KeyW'){
        node.style.top = node.getBoundingClientRect().top - 20 +'px'
        console.log(e.code)
    }else{if(e.code === 'KeyD'){
            node.style.left = node.getBoundingClientRect().left + 20 +'px'
            console.log(node.style.left)
            }else{if(e.code === 'KeyS'){
                    node.style.top = node.getBoundingClientRect().top + 20 +'px'
                    console.log(node.style.top)
                    }else{if(e.code === 'KeyA'){
                            node.style.left = node.getBoundingClientRect().left - 20 +'px'
                            console.log(node.style.left)
                            }
                        }
                    }
                }
            

})