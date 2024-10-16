
const firstPage = document.querySelector(".first__page");
const posterWrap = document.querySelector(".first__page--right");
const posters = document.querySelectorAll(".first__page--right-img");
const firstPageBtn = document.querySelector(".first__page-btn");

let dem = 0;
let distance = -100;
let lengthPosters = posters.length;
function autoNext() {
    dem ++;
    if(dem >= lengthPosters) {
        dem = 0;
        distance = -100;
        for (let i of posters) {
            i.style.transform = `translateX(${0}%)`;
        }
    } else {
        for (let i of posters) {
            i.style.transform = `translateX(${distance}%)`;
        }
        distance -= 100;
    }
    if(dem === 0) {
        firstPage.style.opacity = 0;
        setTimeout( function() {
            firstPage.style.background = "linear-gradient(-90deg, #cdcdcb, #f5f5f5 70% 90%, #cdcdcb)";
            firstPage.style.textShadow = "0px 0px 5px #cdcdcd";
            firstPage.style.color = "#000";
            firstPage.style.opacity = 1;
            firstPageBtn.style.color = "#fff";
            firstPageBtn.style.backgroundColor = "#131118";
            firstPageBtn.style.boxShadow = "0px 0px 10px #cdcdcb";
        }, 100)
    } else if(dem === 1) {
        firstPage.style.opacity = 0;
        setTimeout( function() {
            firstPage.style.background = "linear-gradient(-90deg, #130906 50%, #533125 90%, #130906)";
            firstPage.style.textShadow = "0px 0px 5px #f6ddc4";
            firstPage.style.color = "#fffdfe";
            firstPage.style.opacity = 1;
            firstPageBtn.style.color = "#fff";
            firstPageBtn.style.backgroundColor = "#130906";
            firstPageBtn.style.boxShadow = "0px 0px 10px #130906";
        }, 100)
    } else if(dem === 2) {
        firstPage.style.opacity = 0;
        setTimeout( function() {
            firstPage.style.background = "linear-gradient(90deg, #2b2821, #625542, #9d8767, #b5996f)";
            firstPage.style.textShadow = " 0px 0px 5px #2b2821";
            firstPage.style.color = "#b5996f";
            firstPage.style.opacity = 1;
            firstPageBtn.style.color = "#b5996f";
            firstPageBtn.style.backgroundColor = "#2b2821";
            firstPageBtn.style.boxShadow = "0px 0px 10px #b5996f";
        }, 100)
    } else if(dem === 3) {
        firstPage.style.opacity = 0;
        setTimeout( function() {
            firstPage.style.background = "linear-gradient(90deg, #e0d7d0, #f4eeee)";
            firstPage.style.textShadow = "0px 0px 3px #f4eeee";
            firstPage.style.color = "#000";
            firstPage.style.opacity = 1;
            firstPageBtn.style.color = "";
            firstPageBtn.style.backgroundColor = ""
            firstPageBtn.style.boxShadow = "";
        }, 100)
    }
}

setInterval("autoNext()", 10000);




