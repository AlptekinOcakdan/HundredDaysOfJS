const celsius = document.querySelector(".celsius");
const fah = document.querySelector(".fahrenheit");
const kelvin = document.querySelector(".kelvin");
const form = document.querySelector("form");

form.addEventListener("input", convertTemperature);

function convertTemperature(e) {
  const value = e.target.valueAsNumber;

  if (e.target.classList.contains("celsius")) {
    fah.value = (value * 1.8 + 32).toFixed(2);
    kelvin.value = (value + 273.15).toFixed(2);
  } else if (e.target.classList.contains("fahrenheit")) {
    celsius.value = ((value - 32) / 1.8).toFixed(2);
    kelvin.value = (((value - 32) / 1.8) + 273.15).toFixed(2);
  } else if (e.target.classList.contains("kelvin")) {
    fah.value = (((value - 273.15) * 1.8) + 32).toFixed(2);
    celsius.value = (value - 273.15).toFixed(2);
  }
}


// --Convert Celsius to--
// fah = (x * 1.8) + 32;
// kelvin = x + 273.15;

// -- Convert Fah to --
// celsius = (x - 32) / 1.8;
// kelvin = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// fah = (x - 273.15) * 1.8 + 32;
// celsius = parseFloat(x) - 273.15;
