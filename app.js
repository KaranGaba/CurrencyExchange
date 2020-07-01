const currencyEl_1 = document.getElementById("currency-one");
const amountEl_1 = document.getElementById("amount-one");
const currencyEl_2 = document.getElementById("currency-two");
const amountEl_2 = document.getElementById("amount-two");

const swap = document.getElementById("swap-btn");
const rateText = document.getElementById("rateText");

function calculate() {
  const currency_one = currencyEl_1.value;
  const currency_two = currencyEl_2.value;
  fetch(`https://open.exchangerate-api.com/v6/latest`)
    .then((res) => res.json())
    .then((data) => {
      const rate = (
        data.rates[currency_two] / data.rates[currency_one]
      ).toFixed(3);
      rateText.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_2.value = amountEl_1.value * rate;
    });
}
swap.addEventListener("click", () => {
  let temp = currencyEl_1.value;
  currencyEl_1.value = currencyEl_2.value;
  currencyEl_2.value = temp;
  calculate();
});
currencyEl_1.addEventListener("change", calculate);
amountEl_1.addEventListener("input", calculate);
currencyEl_2.addEventListener("change", calculate);
amountEl_2.addEventListener("change", calculate);
calculate();
