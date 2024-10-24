
// Product
const inputCheck = document.querySelectorAll(".input-check");
const checkboxFakes = document.querySelectorAll(".category__item--checkbox-fake");
const checkboxFakeLabels = document.querySelectorAll(".category__item--checkbox-label");
let isChecked = [false, false, false];
const iconCloses = document.querySelectorAll(".category__item--icon-close");
const iconOpens = document.querySelectorAll(".category__item--icon-open");
const titleCategories = document.querySelectorAll(".category__item--title");
let isOpenTitleCategories = [true, true, true];
const inputRangeMin = document.querySelector(".range-min");
const inputRangeMax = document.querySelector(".range-max");
const renderMinPrice = document.querySelector(".min-price");
const renderMaxPrice = document.querySelector(".max-price");

        //render filter price
inputRangeMin.oninput = () => {
    renderMinPrice.textContent = inputRangeMin.value;
};
inputRangeMax.oninput = () => {
    renderMaxPrice.textContent = inputRangeMax.value;
};
        // checkbox
checkboxFakes.forEach((checkboxFake, index) => {
    checkboxFake.addEventListener("click", () => {
        isChecked[index] = !isChecked[index];
        inputCheck[index].checked = isChecked[index];
    });
})
checkboxFakeLabels.forEach((checkboxFakeLabel, index) => {
    checkboxFakeLabel.addEventListener("click", () => {
        isChecked[index] = !isChecked[index];
        inputCheck[index].checked = isChecked[index];
    });
})
        // titleCategories
titleCategories.forEach((titleCategory, index) => {
    titleCategory.addEventListener("click", () => {
        const ChildrenList = titleCategory.parentElement.children;
        
        isOpenTitleCategories[index] = !isOpenTitleCategories[index];
        if(isOpenTitleCategories[index]) {
            iconCloses[index].style.display = "inline-block";
            iconOpens[index].style.display = "none";
            for(let i = 1; i < ChildrenList.length; i++) {
                ChildrenList[i].style.display = "flex";
            }
        } else {
            iconCloses[index].style.display = "none";
            iconOpens[index].style.display = "inline-block";
            
            for(let i = 1; i < ChildrenList.length; i++) {
                ChildrenList[i].style.display = "none";
            }
        }
    });

});