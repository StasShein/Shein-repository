let cart = []

function randomId(max) {
    return Math.floor(Math.random() * max);
}
  

function addToCart(){

    let obj = {}

    cart.push(obj)

    obj.nam = prompt('введите название')
    obj.price = +prompt('Введиет цену')
    obj.amount = +prompt('Введиет количество')
    obj.category = prompt('Введите категорию')
    obj.sum = obj.price * obj.amount
    obj.id = randomId(9999)

}

addToCart()

console.log(cart) 

