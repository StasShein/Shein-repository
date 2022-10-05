let array = [7,3,78,34,54,12,21,32,9,23,45,67,56,54]

function min(arr){
    let b = 100
    for(let i = 0; i < arr.length; i++){
        if(b > arr[i]){
            b = arr[i]
        }
    }
    console.log(b)
}

min(array)

function max(arr){
    let c = 0
    for(let i = 0; i < arr.length; i++){
        if(c < arr[i]){
            c = arr[i]
        }
    }
    console.log(c)
}

max(array)



    
