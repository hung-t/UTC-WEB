const optionColor = document.querySelectorAll(".btn-selected-color");
const optionSize = document.querySelectorAll(".btn-selected-size");


const Price = document.querySelector(".detail__info--price-new");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const numChoose = document.querySelector(".detail__info--number");
let num = +numChoose.textContent;
let newPrice = +Price.textContent.slice(1);


const titleDetailProduct = document.querySelectorAll(".detail__product--title");
const detailProductDes = document.querySelector(".detail__product--content-des");
const detailProductInfo = document.querySelector(".detail__product--content-info");
const detailProductReview= document.querySelector(".detail__product--content-reviews");


function selected(elements) {
    elements.forEach(function(element) {
        element.addEventListener("click", function() {
            elements.forEach(function(element) {
                element.style.border = "none";
            })
            element.style.border = "2px solid #000";
        })
    })
}
selected(optionColor);
selected(optionSize);


minus.addEventListener("click", function() {
    if(num > 1) {
        num--;
        numChoose.textContent = num;
        Price.textContent = `${newPrice -= 999}$`;
    }
})
plus.addEventListener("click", function() {
    num++;
    numChoose.textContent = num;
    Price.textContent = `${newPrice += 999}$`;
})



// des product
titleDetailProduct.forEach(function(title) {
    title.addEventListener("click", function(e) {
        titleDetailProduct.forEach(function(title) {
            title.classList.remove("detail__product--title-active");
        })
        title.classList.add("detail__product--title-active");
        if(titleDetailProduct[0] === title) {
            detailProductDes.style.display = "block";
            detailProductInfo.style.display = "none";
            detailProductReview.style.display = "none";
        } else if(titleDetailProduct[1] === title) {
            detailProductDes.style.display = "none";
            detailProductInfo.style.display = "block";
            detailProductReview.style.display = "none";
        } else if(titleDetailProduct[2] === title) {
            detailProductDes.style.display = "none";
            detailProductInfo.style.display = "none";
            detailProductReview.style.display = "block";
        }
    });
})