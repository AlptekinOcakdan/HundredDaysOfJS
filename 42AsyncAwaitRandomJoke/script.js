const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";

btn.addEventListener("click", getJoke);

async function getJoke() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        joke.innerHTML = data.value.joke;
    } catch (error) {
        joke.innerHTML = error.message;
    }
}
