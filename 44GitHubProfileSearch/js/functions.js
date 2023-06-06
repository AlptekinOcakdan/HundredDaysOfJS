import * as v from "./variables.js";

// Get Users
export async function getUser(username) {
    const response = await fetch(v.apiURL + username);
    const data = await response.json();

    if (!response.ok) {
        errorMessage("User not found, please try another username.");
    } else {
        displayData(data);
        await getRepos(username);
    }
}


// Get Repos
async function getRepos(username) {
    const response = await fetch(v.apiURL + username + "/repos");
    const data = await response.json();

    if (!response.ok) {
        errorMessage("Failed to fetch repositories.");
    } else {
        displayRepos(data);
    }
}

// Error message function
export function errorMessage(msg) {
    clearProfileAndError();
    v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
}

function displayData(user) {
    const html = `
        <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="img-thumbnail rounded-circle"
        />
        <h2>${user.name}</h2>
        <p>${user.login}</p>
        <div class="d-grid">
            <a href="https://github.com/${user.login}" target="_blank" rel="noopener" class="btn btn-outline-secondary">View Profile</a>
        </div>
        <p class="pt-2">
            <span>${user.followers} Followers</span>
            <span>${user.following} Following</span>
        </p>
        <p>${user.public_repos}</p>
        <p><i class="fas fa-marker-alt"></i>${user.location}</p>
    `;
    v.profile.innerHTML = html;
}

// Display Repos
function displayRepos(repoData) {
    const repoHTML = repoData
        .slice(0, 8)
        .map((repo) => {
            return `
                <span class="repo border border-rounded p-3">
                    <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
                    <p>
                        <strong>Stars: ${repo.stargazers_count} |</strong>
                        <strong>Watchers: ${repo.watchers_count} |</strong>
                        <strong>Forks: ${repo.forks_count}</strong>
                    </p>
                </span>
            `;
        })
        .join("");
    v.repos.innerHTML = repoHTML;
    v.hideElement.style.display = "block";
}

// Clear profile and error message
function clearProfileAndError() {
    v.profile.innerHTML = "";
    v.repos.innerHTML = "";
    v.hideElement.style.display = "none";
}