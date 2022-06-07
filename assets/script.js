// update quantity
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
    let remove = document.querySelector('.remove-item')
    remove.innerHTML = displayItem

}

// Start quantity at 1 since product is in cart
let quantity = 1
let remove = 1

// Buttons
const quantDown = document.querySelector('#quantity-down')
const quantUp = document.querySelector('#quantity-up')
const removeItem = document.querySelector('#remove-item')

// add event listener to decrease quantity
quantDown.addEventListener('click', function(e) {
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

// add event listener to increase quantity
quantUp.addEventListener('click', function() {
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

// add event listener to remove item
removeItem.addEventListener('click', function() {
    if (remove > 0) {
        remove--
    }
    updateQuantity('Quantity: ${quantity}')


})