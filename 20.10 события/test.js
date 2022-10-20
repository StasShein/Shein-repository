// let node = document.getElementById('root')

// node.onclick = () =>  alert('Hello')

// function hideText(){
//     document.getElementById('hide').style = 'color:white'
// }

// function visionText(){
//     // document.getElementById('hide').style = 'color:black'
//     let a = document.getElementById('hide')
//     a.toggleAttribute(style = 'display:none')
// }


// node.addEventListener('click', 

// (event)=>{
//     let state = event.target.getAttribute('data-state')

//     if(state){
//         state = false
//         document.getElementById('Text').style.display ='';
        
//     }else{
//         state = true
//         document.getElementById('Text').style.display ='';
        
//     }
    
//     event.target.setAttribute('data-state',state)

// }
// )

// let node = document.getElementById('main')
// node.addEventListener(

//     'click',

//     (event) => {
//         let item = document.getElementById('root');
//         item.style.top = `${event.clientY}px`; 
//         item.style.left = `${event.clientX}px`; 
//         item.style.transition = '2s'
//         console.log(event.target);
//     }

// )

let node = document.getElementById('main')
main.addEventListener(
    'click',
    (event)=>{

        if(event.target.id != 'main'){
            event.target.style.background = 'red'
        }

        if(event.target.background = 'white'){
            event.target.style.background = 'red'
            console.log(1)
        }else{
            event.target.style.background = 'white'
        }

        console.log(event.target.parentNode)
    }
)

