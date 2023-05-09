{

    const getResult = (currencyFrom, amountElement) => {
        switch (currencyFrom.value) {
            case "gbp":
                return +amountElement.value * gbp;

            case "pln":
                return +amountElement.value * pln;

            case "eur":
                return +amountElement.value * eur;
        }
    }

    const eur = 4.72;
    const gbp = 5.40;
    const pln = 1;

    const init = () => {

        const currencyFrom = document.querySelector(".js-currencyFrom");
        const amountElement = document.querySelector(".js-amount");
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const currencyTo = document.querySelector(".js-currencyTo");
            const resultElement = document.querySelector(".js-result");

            let result = getResult(currencyFrom, amountElement);
            let currency = currencyTo.value;

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
            resultElement.innerHTML = `${result.toFixed(2)} ${currency.toUpperCase()}`;


        });
    }

    init();

}