const cartItems = document.querySelectorAll(".cart-item");
const minusAll = document.querySelectorAll(".bx-minus");
const plusAll = document.querySelectorAll(".bx-plus");
const trashAll = document.querySelectorAll(".bx-trash");
const quantities = document.querySelectorAll(".quantity-text");
const subtotal = document.querySelectorAll(".subtotal");
const subtotalAll = document.querySelector(".subtotalAll");
const total = document.querySelector(".total");
let number = cartItems.length;

minusAll.forEach(function(minus, index) {
    minus.addEventListener("click", function() {
        let currentQuantity = parseInt(quantities[index].textContent);
        if(currentQuantity > 1) {
            quantities[index].textContent = currentQuantity - 1;
        }
    })
})
plusAll.forEach(function(plus, index) {
    plus.addEventListener("click", function() {
        let currentQuantity = parseInt(quantities[index].textContent);
        quantities[index].textContent = currentQuantity + 1;
    })
})

trashAll.forEach(function(trash, index) {
    trash.addEventListener("click", function() {
        cartItems[index].remove();
        number--;
        if(number === 0) {
            document.querySelector(".cart-empty").style.display = "block";
        }
    })
})
