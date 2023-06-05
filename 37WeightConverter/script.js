const pounds = document.querySelector(".pounds");
const kilograms = document.querySelector(".kilograms");
const grams = document.querySelector(".grams");
const ounces = document.querySelector(".ounces");
const form = document.querySelector("form");

form.addEventListener("input", convertWeight);

function convertWeight(e) {
  const value = e.target.valueAsNumber;

  if (e.target.classList.contains("pounds")) {
    kilograms.value = (value / 2.2046).toFixed(2);
    grams.value = (value / 0.0022046).toFixed(2);
    ounces.value = (value * 16).toFixed(2);
  } else if (e.target.classList.contains("kilograms")) {
    pounds.value = (value * 2.2046).toFixed(2);
    grams.value = (value * 1000).toFixed(2);
    ounces.value = (value * 35.274).toFixed(2);
  } else if (e.target.classList.contains("grams")) {
    kilograms.value = (value / 1000).toFixed(2);
    pounds.value = (value * 0.0022046).toFixed(2);
    ounces.value = (value * 0.035274).toFixed(2);
  } else if (e.target.classList.contains("ounces")) {
    kilograms.value = (value / 35.274).toFixed(2);
    grams.value = (value / 0.035274).toFixed(2);
    pounds.value = (value * 0.0625).toFixed(2);
  }
}


// -- From pounds to --
// kilograms = x / 2.2046;
// grams = x / 0.0022046;
// ounces = x * 16;

// -- From Kilogram to --
// pounds = x * 2.2046;
// grams = x * 1000;
// ounces = x * 35.274;

// -- From Gram to --
// kilograms = x / 1000;
//   pounds = x * 0.0022046;
//   ounces = x * 0.035274;

// -- From Ounce to --
// kilograms = x / 35.274;
// grams = x / 0.035274;
// pounds = x * 0.0625;
