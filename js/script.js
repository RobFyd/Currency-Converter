{
    const currencyFrom = document.querySelector(".js-currencyFrom");
    const amountElement = document.querySelector(".js-amount");

    const eur = 4.72;
    const gbp = 5.40;
    const pln = 1;

    const firstCalculateResult = (currencyFrom, amountElement) => {
        switch (currencyFrom.value) {
            case "gbp":
                return amountElement.value * gbp;

            case "pln":
                return amountElement.value * pln;

            case "eur":
                return amountElement.value * eur;
        }

    }

    const currencyTo = document.querySelector(".js-currencyTo");
    let result1 = firstCalculateResult(currencyFrom, amountElement);

    const secondCalculateResult = (currencyTo, result1) => {
        switch (currencyTo.value) {
            case "gbp":
                return result1.value /= gbp;

            case "pln":
                return result1.value /= pln;

            case "eur":
                return result1.value /= eur;
        }
    }

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const resultElement = document.querySelector(".js-result");

        let result = secondCalculateResult(currencyTo, result1);

        resultElement.innerText = result.toFixed(2);
    });
}