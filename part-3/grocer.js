const shoppingCart = document.getElementById("shopping-cart")
const modalOverlay = document.getElementById("modal-overlay")
const cartCounter = document.getElementById("cart-item-count")
const cartBalance = document.getElementById("cart-balance")
const addToCartBtn = document.querySelectorAll("li button")


let items = []
let balance

let addToCart = () => {

}

var getItemData = ( element ) => {
    let childNodes = element.target.parentElement.childNodes
    let name = childNodes[ 1 ].innerHTML
    let price = childNodes[ 3 ].innerHTML
    items.push({ name, price })
    cartCounter.innerHTML = items.length
    getBalance()
    cartBalance.innerHTML = "$" + balance.toFixed( 2 )
    const modalItem = document.createElement( "DIV" )
    const itemNameTextNode = document.createTextNode( name )
    const itemNameNode = document.createElement( "SPAN" ).appendChild( itemNameTextNode )
    modalItem.appendChild( itemNameNode )
    const itemPrice = document.createTextNode( price )
    const itemPriceNode = document.createElement( "SPAN" ).appendChild( itemPrice )
    modalItem.appendChild( itemPriceNode )
    shoppingCart.appendChild( modalItem )
}

var getBalance = () => {
    balance = items.reduce( calculate, 0 )
    return balance
}

var calculate = ( balance, item ) => {
    let itemPrice = Number(item.price.slice( 1 ))
    return balance + itemPrice
}

var openCart = () => {
    shoppingCart.classList.remove( 'hidden' )
    modalOverlay.classList.remove( 'hidden' )
}

var closeCart = () => {
    shoppingCart.classList.add( 'hidden' )
    modalOverlay.classList.add( 'hidden' )
}