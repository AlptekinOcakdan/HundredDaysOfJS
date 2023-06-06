const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");

const apiURL = "https://api.lyrics.ovh";

form.addEventListener("submit", e => {
    e.preventDefault();
    const searchValue = search.value.trim();
    console.log(searchValue);
    if (!searchValue) {
        alert("Nothing to search");
    } else {
        beginSearch(searchValue)
            .then(data => {
                displayData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }
});

async function beginSearch(searchValue) {
    try {
        const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
        const data = await searchResult.json();

        displayData(data);
    } catch (error) {
        displayError("Failed to fetch search results");
    }
}

function displayData(data) {
    result.innerHTML = `
    <ul class="songs">
        ${data.data
        .map(
            song => `<li>
                    <div>
                        <strong>${song.artist.name}</strong> - ${song.title}
                    </div>
                    <button data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
                </li>`
        )
        .join("")}
    </ul>`;
}

result.addEventListener("click", async e => {
    const clickedElement = e.target;

    if (clickedElement.tagName === "BUTTON") {
        const artist = clickedElement.getAttribute("data-artist");
        const songTitle = clickedElement.getAttribute("data-songtitle");

        try {
            const lyrics = await getLyrics(artist, songTitle);
            displayLyrics(artist, songTitle, lyrics);
        } catch (error) {
            displayError("Failed to fetch lyrics");
        }
    }
});

async function getLyrics(artist, songTitle) {
    const response = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await response.json();

    return data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");
}

function displayLyrics(artist, songTitle, lyrics) {
    result.innerHTML = `
    <h2><strong>${artist}</strong> - ${songTitle}</h2>
    <p>${lyrics}</p>`;
}

function displayError(message) {
    result.innerHTML = `<p class="error-message">${message}</p>`;
}
