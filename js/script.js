{
    const formElement = document.querySelector(".js-form");
    const currencyFrom = document.querySelector(".js-currencyFrom");
    const currencyTo = document.querySelector(".js-currencyTo");
    const amountElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");

    const eur = 4.72;
    const gbp = 5.40;
    const pln = 1;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        switch (currencyFrom.value) {
            case "gbp":
                result = amountElement.value * gbp;
                break;
            case "pln":
                result = amountElement.value * pln;
                break;
            case "eur":
                result = amountElement.value * eur;
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
}