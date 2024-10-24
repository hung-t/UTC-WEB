

const imgMins = document.querySelectorAll(".detail__img--min");
const imgBig = document.querySelector(".detail__img--big");
const shiftLeft = document.querySelector(".detail__img--big-icon-left");
const shiftRight = document.querySelector(".detail__img--big-icon-right");
let indexImgActive = 0;

const optionColor = document.querySelectorAll(".btn-selected-color");
const optionSize = document.querySelectorAll(".btn-selected-size");

const Price = document.querySelector(".detail__info--price-new");
const PriceFake = document.querySelector(".detail__info--price-old");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const numChoose = document.querySelector(".detail__info--number");
let num = +numChoose.textContent;
let newPrice = +Price.textContent.slice(1);
let oldPrice = +PriceFake.textContent.slice(1);

const titleDetailProduct = document.querySelectorAll(".detail__product--title");
const detailProductDes = document.querySelector(".detail__product--content-des");
const detailProductInfo = document.querySelector(".detail__product--content-info");
const detailProductReview= document.querySelector(".detail__product--content-reviews");


shiftLeft.addEventListener("click", () =>{
    if(indexImgActive > 0) {
        indexImgActive -= 1;
        imgBig.src = imgMins[indexImgActive].src;
        imgMins.forEach(function(img){
            img.classList.remove("detail__img--min-active");
        });
        imgMins[indexImgActive].classList.add("detail__img--min-active");
    } else {
        indexImgActive = imgMins.length - 1;
        imgBig.src = imgMins[indexImgActive].src;
        imgMins.forEach(function(img){
            img.classList.remove("detail__img--min-active");
        });
        imgMins[indexImgActive].classList.add("detail__img--min-active");
    }
});
shiftRight.addEventListener("click", () =>{
    if(indexImgActive < imgMins.length - 1) {
        indexImgActive += 1;
        imgBig.src = imgMins[indexImgActive].src;
        imgMins.forEach(function(img){
            img.classList.remove("detail__img--min-active");
        });
        imgMins[indexImgActive].classList.add("detail__img--min-active");
    } else {
        indexImgActive = 0;
        imgBig.src = imgMins[indexImgActive].src;
        imgMins.forEach(function(img){
            img.classList.remove("detail__img--min-active");
        });
        imgMins[indexImgActive].classList.add("detail__img--min-active");
    }
});


imgMins.forEach(function(img, index){
    img.addEventListener("click", function(){
        imgBig.src = this.src;
        imgMins.forEach(function(img){
            img.classList.remove("detail__img--min-active");
        });
        indexImgActive = index;
        this.classList.add("detail__img--min-active");
    })
})





function selected(elements) {
    elements.forEach(function(element) {
        element.addEventListener("click", function() {
            elements.forEach(function(element) {
                element.style.border = "none";
            })
            element.style.border = "2px solid var(--primary-color)";
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
        PriceFake.textContent = `${oldPrice -= 1299}$`;

    }
})
plus.addEventListener("click", function() {
    num++;
    numChoose.textContent = num;
    Price.textContent = `${newPrice += 999}$`;
    PriceFake.textContent = `${oldPrice += 1299}$`;
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

