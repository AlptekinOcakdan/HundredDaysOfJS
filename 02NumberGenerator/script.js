const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    number.textContent = randomNumber;
};

btn.addEventListener("click", generateNumber);
