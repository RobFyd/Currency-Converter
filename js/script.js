{
  // Retrieving references to form elements and results on a page
  const currencyFrom = document.querySelector(".js-currencyFrom");
  const amountElement = document.querySelector(".js-amount");
  const formElement = document.querySelector(".js-form");
  const currencyTo = document.querySelector(".js-currencyTo");
  const resultElement = document.querySelector(".js-result");


  // Function that calculates currency conversion
  const calculateConversion = (currencyFromValue, amount, currencyToValue) => {
    
    // Currency exchange rates
    const eur = 4.72;
    const gbp = 5.4;
    const pln = 1;

    // Calculating the exchange rate of the source currency
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

    // Convert the amount to the target currency
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

  // Updating the conversion result in the UI
  const updateResult = (result, currencyToValue) => {
    resultElement.innerHTML = `${result.toFixed(
      2
    )} ${currencyToValue.toUpperCase()}`;
  };

  // Form submission support
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

  // Initialize the form event listener
  const init = () => {
    formElement.addEventListener("submit", handleSubmit);
  };

  init();

  // Function that updates the date and time in real time
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

    document.querySelector(".date__span").innerText = newDate;
  };

  // Starting a timer that updates the date every second
  setInterval(calcDate, 1000);
}
