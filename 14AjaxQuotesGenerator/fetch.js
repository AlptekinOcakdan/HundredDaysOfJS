const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

function getQuotes(e) {
    e.preventDefault();

    if (number.value.length === 0) {
        alert("Please enter a number");
        return;
    }

    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data = shuffle(data);
            let output = "";
            const limit = parseInt(number.value, 10);
            for (let i = 0; i < limit && i < data.length; i++) {
                output += `
                    <li>Quote: ${data[i].text}</li>
                    <li>Author: ${data[i].author}</li>
                    <hr>
                `;
            }
            document.querySelector(".quotes").innerHTML = output;
        });
}


function shuffle(quotes) {
    let CI = quotes.length;
    let tempValue, randomIndex;

    while (CI >= 1) {
        randomIndex = Math.floor(Math.random() * CI);
        CI--;
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }

    return quotes;
}
