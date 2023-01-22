let formElement = document.querySelector(".js-form");
let currencyFrom = document.querySelector(".js-currencyFrom");
let currencyTo = document.querySelector(".js-currencyTo");
let amount = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let eur = 4.72;
let gbp = 5.40;
let pln = 1;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    switch (currencyFrom.value) {
        case "gbp":
            result = amount.value * gbp;
            break;
        case "pln":
            result = amount.value * pln;
            break;
        case "eur":
            result = amount.value * eur;
            break;
    }
    switch (currencyTo.value) {
        case "gbp":
            result /= gbp;
            break;
        case "pln":
            result /= pln;
            break;
        case "eur":
            result /= eur;
            break;
    }
    resultElement.innerText = result.toFixed(2);
});
