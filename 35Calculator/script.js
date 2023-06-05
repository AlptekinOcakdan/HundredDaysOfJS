const keys = document.getElementsByTagName("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear");

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", handleClick);
}

function handleClick() {
    const key = this.innerHTML;

    if (key === "=") {
        calculate();
    } else if (key === "÷") {
        addToCurrentValue("/");
    } else if (key === "x") {
        addToCurrentValue("*");
    } else {
        addToCurrentValue(key);
    }
}

function addToCurrentValue(value) {
    result.innerHTML += value;
}

function calculate() {
  const expression = result.innerHTML;
  const safeExpression = sanitizeExpression(expression);

  if (isExpressionValid(safeExpression)) {
    try {
      const fn = new Function('return ' + safeExpression);
      result.innerHTML = fn();
    } catch (error) {
      result.innerHTML = 'Error';
    }
  } else {
    result.innerHTML = 'Invalid Expression';
  }
}

function sanitizeExpression(expression) {
  return expression.replace(/[^\d+\-*/.%]/g, '');
}

function isExpressionValid(expression) {
  const invalidPatterns = [
    /^\d*\/0+$/,
    /\.\d*\./,
    /[+\-*/.]{2,}/,
  ];

  return !invalidPatterns.some(pattern => pattern.test(expression));
}


clear.addEventListener("click", () => {
    result.innerHTML = "";
});
