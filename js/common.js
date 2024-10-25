// Lắng nghe sự kiện "template-loaded"
window.addEventListener("template-loaded", () => {
    headerAction();
    const inputSearch = document.querySelector("#header__search");
    setTimeout(() => {
        if (inputSearch) {
            inputSearch.focus();
        }
    }, 2000);
    searchWork();
});

const $ = document.querySelector.bind(document);
function load(selector, path) {
    fetch(path)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to load: ${res.statusText}`);
            }
            return res.text();
        })
        .then((html) => {
            $(selector).innerHTML = html;
        })
        .catch((error) => {
            console.error('Error loading template:', error);
        })
        .finally(() => {
            window.dispatchEvent(new Event("template-loaded"));
        });
}

// header
function headerAction() {
    const searchIcon = document.querySelector(".header__search--icon");
    const searchOverlay = document.querySelector(".header__search--overlay");
    const search = document.querySelector(".header__input");
    searchIcon.addEventListener("click", () => {
        searchOverlay.style.visibility = "inherit";
        searchOverlay.style.opacity = "1";
        search.style.visibility = "inherit";
        search.style.opacity = "1";
    });
    searchOverlay.addEventListener("click", (e) => {
        searchOverlay.style.visibility = "hidden";
        searchOverlay.style.opacity = "0";
        search.style.visibility = "hidden";
        search.style.opacity = "0";
    });
}
function searchWork() {
    const inputSearch = document.querySelector("#header__search");
    const clearText = document.querySelector(".header__search--clear-text");
    const trendSearch = document.querySelector(".header__search--trend");
    const userSearch = document.querySelector(".header__search--user");
    const searchWord = [
        "Iphone 16 Pro Max",
        "IPhone 16 Plus",
        "Iphone 15 Pro Max",
        "Iphone 15 Pro",
        "Iphone 14 Pro Max",
        "Iphone 14 Pro",
        "Iphone 13 Pro Max",
        "Iphone 13 Pro",
        "Iphone 12 Pro Max",
        "Iphone 12 Pro",
        "Iphone 11 Pro Max",
        "Samsung Galaxy Z Flip6 5G",
        "Samsung Galaxy Z Flip 6 XAM Metal",
        "Samsung Galaxy Z Fold5 5G",
        "Samsung Galaxy S23 Ultra 5G",
        "Samsung Galaxy S21 Ultra",
        "Samsung Galaxy S21",
        "Smartphone Huawei Mate XT",
        "Oppo Find X5",
        "Oppo Reno6",
        "Oppo A54",
        "Oppo A74",
        "Oppo Reno5 Pro",
        "Oppo Find N",
        "Oppo A95",
        "Oppo Reno6 Pro",
        "Oppo A74 5G",
        "Oppo Reno5 5G",
        "Google Pixel 7",
        "Google Pixel 7 Pro",
        "Google Pixel 6",
        "Google Pixel 6 Pro",
        "Google Pixel 5",
        "Google Pixel 4a",
        "Google Pixel 4a (5G)",
        "Google Pixel 4",
    ];

    clearText.addEventListener("click", (e) => {
        inputSearch.value = "";
        inputSearch.focus();
        userSearch.style.display = "none"; 
        trendSearch.style.display = "block";
    });

    inputSearch.addEventListener("input", () => {
        userSearch.innerHTML = 
        `<div class="header__search--title-wrap">
            <h3 class="header__search--title">Search results</h3>
        </div>`;
        let isFound = false;

        searchWord.forEach(function(word, index) {
            if (inputSearch.value.length !== 0 && word.toLowerCase().startsWith(inputSearch.value.toLowerCase())) {
                userSearch.style.display = "block";
                userSearch.innerHTML += `<a href="../html/product.html" class="header__search--item">${word}</a>`;
                trendSearch.style.display = "none";
                isFound = true;
            }
            if(word.toLowerCase().includes(inputSearch.value.toLowerCase())) {
                userSearch.style.display = "block";
                userSearch.innerHTML += `<a href="../html/product.html" class="header__search--item">${word}</a>`;
                trendSearch.style.display = "none";
                isFound = true;
            }
        });

        if (!isFound || inputSearch.value.length === 0 || inputSearch.value === " ") {
            userSearch.style.display = "none"; 
            trendSearch.style.display = "block";
        }
    });

}
