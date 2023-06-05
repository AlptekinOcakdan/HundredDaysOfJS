// BMI - kg/m2
// Normal - 18.5 -24.9
// Underweight - < 18.5
// Overweight -  25 - 29.9
// Obese -  30 and above
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

btn.addEventListener("click", calculateBMI);
reset.addEventListener("click", resetForm);

function calculateBMI(e) {
  e.preventDefault();
  const height = parseFloat(document.querySelector(".height").value);
  const weight = parseFloat(document.querySelector(".weight").value);

  if (isNaN(height) || isNaN(weight)) {
    showResult("Provide valid Height and Weight!", "orange");
  } else {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    displayBMIResult(bmi);
  }
}

function displayBMIResult(bmi) {
  const category = getBMICategory(bmi);
  showResult(`${category}: <span>${bmi}</span>`, getCategoryColor(category));
  reset.style.display = "block";
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 24.9) {
    return "Normal";
  } else if (bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

function getCategoryColor(category) {
  switch (category) {
    case "Underweight":
      return "orange";
    case "Normal":
      return "green";
    case "Overweight":
      return "blue";
    case "Obese":
      return "red";
    default:
      return "";
  }
}


function showResult(val, color) {
  result.classList.remove("red", "blue", "orange", "green");
  result.classList.add(color);
  result.innerHTML = val;
  result.style.display = "block";
}

function resetForm() {
  document.querySelector("form").reset();
  reset.style.display = "none";
  result.style.display = "none";
  result.className = "result"; // Remove color class
}
