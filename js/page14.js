const cartItems = document.querySelectorAll(".cart-item");
const minusAll = document.querySelectorAll(".bx-minus");
const plusAll = document.querySelectorAll(".bx-plus");
const trashAll = document.querySelectorAll(".bx-trash");
const quantities = document.querySelectorAll(".quantity-text");
const subtotal = document.querySelectorAll(".subtotal");
const subtotalAll = document.querySelector(".subtotalAll");
const total = document.querySelector(".totalReal");
let number = cartItems.length;
let stringTotal = [80, 80, 80];

minusAll.forEach(function (minus, index) {
    minus.addEventListener("click", function () {
        let currentQuantity = parseInt(quantities[index].textContent);
        if (currentQuantity > 1) {
            stringTotal[index] -= 80;
            quantities[index].textContent = currentQuantity - 1;
            subtotal[index].textContent = `$${stringTotal[index]}.00`;
            const temp = stringTotal.reduce((result, value) => result + value, 0);
            subtotalAll.textContent = `$${temp}.00`;
            total.textContent = `$${temp + 5}.00`;
        }
    })
})
plusAll.forEach(function (plus, index) {
    plus.addEventListener("click", function () {
        let currentQuantity = parseInt(quantities[index].textContent);
        quantities[index].textContent = currentQuantity + 1;
        stringTotal[index] += 80;
        subtotal[index].textContent = `$${stringTotal[index]}.00`;
        const temp = stringTotal.reduce((result, value) => result + value, 0);
        subtotalAll.textContent = `$${temp}.00`;
        total.textContent = `$${temp + 5}.00`;
    })
})

trashAll.forEach(function (trash, index) {
    trash.addEventListener("click", function () {
        cartItems[index].remove();
        stringTotal[index] = 0;
        number--;
        if (number === 0) {
            document.querySelector(".cart-empty").style.display = "block";
            subtotalAll.textContent = `$0.00`;
            total.textContent = `$$0.00`;
        } else {
            const temp = stringTotal.reduce((result, value) => result + value, 0);
            subtotalAll.textContent = `$${temp}.00`;
            total.textContent = `$${temp + 5}.00`;
        }
    })
})

