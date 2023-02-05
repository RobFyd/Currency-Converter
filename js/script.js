{
    const getFormElements = () => {
        return {
            formElement: document.querySelector(".js-form"),
            currencyFrom: document.querySelector(".js-currencyFrom"),
            currencyTo: document.querySelector(".js-currencyTo"),
            amount: document.querySelector(".js-amount"),
            resultElement: document.querySelector(".js-result"),
        };
    };

    const calculateCurrency = (currencyFromValue, amountValue, exchangeRates) => {
        let result;
        switch (currencyFromValue) {
            case "gbp":
                result = amountValue * exchangeRates.gbp;
                break;
            case "pln":
                result = amountValue * exchangeRates.pln;
                break;
            case "eur":
                result = amountValue * exchangeRates.eur;
                break;
        }
        return result;
    };

    const convertCurrency = (result, currencyToValue, exchangeRates) => {
        switch (currencyToValue) {
            case "gbp":
                result /= exchangeRates.gbp;
                break;
            case "pln":
                result /= exchangeRates.pln;
                break;
            case "eur":
                result /= exchangeRates.eur;
                break;
        }
        return result;
    };

    const handleFormSubmit = (event, elements, exchangeRates) => {
        event.preventDefault();
        let result = calculateCurrency(
            elements.currencyFrom.value,
            elements.amount.value,
            exchangeRates
        );
        result = convertCurrency(
            result,
            elements.currencyTo.value,
            exchangeRates
        );
        elements.resultElement.innerText = result.toFixed(2);
    };

    const exchangeRates = {
        eur: 4.72,
        gbp: 5.40,
        pln: 1,
    };

    const elements = getFormElements();
    elements.formElement.addEventListener("submit", (event) =>
        handleFormSubmit(event, elements, exchangeRates)
    );
}

