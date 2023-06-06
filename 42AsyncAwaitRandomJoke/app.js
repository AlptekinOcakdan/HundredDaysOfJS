const jokeElement = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", getJoke);

async function getJoke() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }
        const data = await response.json();
        jokeElement.textContent = data.value;
    } catch (error) {
        jokeElement.textContent = error.message;
    }
}
