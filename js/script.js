{
  const calcDate = () => {
    const date = new Date();
    const newDate = date.toLocaleDateString("en-EN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    document.querySelector(".js-date").innerText = newDate;
  };

  setInterval(calcDate, 1000);

  const currencyFrom = document.querySelector(".js-currencyFrom");
  const amountElement = document.querySelector(".js-amount");
  const formElement = document.querySelector(".js-form");
  const currencyTo = document.querySelector(".js-currencyTo");
  const resultElement = document.querySelector(".js-result");

  const calculateConversion = (currencyFromValue, amount, currencyToValue) => {
    const eur = 4.72;
    const gbp = 5.4;
    const pln = 1;

    let conversionRate;
    switch (currencyFromValue) {
      case "gbp":
        conversionRate = gbp;
        break;
      case "pln":
        conversionRate = pln;
        break;
      case "eur":
        conversionRate = eur;
        break;
    }

    let result = +amount * conversionRate;
    switch (currencyToValue) {
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

    return result;
  };

  const updateResult = (result, currencyToValue) => {
    resultElement.innerHTML = `${result.toFixed(
      2
    )} ${currencyToValue.toUpperCase()}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currencyFromValue = currencyFrom.value;
    const currencyToValue = currencyTo.value;
    const amount = amountElement.value;

    const result = calculateConversion(
      currencyFromValue,
      amount,
      currencyToValue
    );
    updateResult(result, currencyToValue);
  };

  const init = () => {
    formElement.addEventListener("submit", handleSubmit);
  };

  init();
}
