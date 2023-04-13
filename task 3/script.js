const Elem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  Elem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convert();
});

function convert() {
  let inputValue = degree.value;

if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    Elem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
  } else if (tempType.value === "celcius") {
    const CelsiusToFahrenheit = (inputValue*9/5)+32 ;
    Elem.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F`;
  }
}