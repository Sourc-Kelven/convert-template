const USD = 63.9;
const EUR = 75.02;
const GBP = 86.12;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
};

function convertCurrency(amount, price, symbol) {
    
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyMZN(price)}` 

        let total = amount * price

        if(isNaN(total)){
            return alert("Insira o valor correto pra converter")
        }
        total = formatCurrencyMZN(total).replace("MZN", "")
        result.textContent = `${total} Meticais` 

        footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Nao foi possivel realizar a conversao, tente mais tarde")
    }
}

function formatCurrencyMZN(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "MZN",
    })
}

function formatResult(){

}
