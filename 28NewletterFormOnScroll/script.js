const links = document.querySelectorAll(".nav-list li a");

for (let link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Scroll Indicator JS
window.onscroll = () => scrollProgress();

function scrollProgress() {
    const currentState =
        document.body.scrollTop || document.documentElement.scrollTop;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage = (currentState / pageHeight) * 100;

    const progressBar = document.querySelector(".progress");

    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";
}

function newsletter(){
    const newsLetter = document.querySelector(".newsletter");

    // Show the newsletter after 3 seconds
    setTimeout(() => {
        newsLetter.style.transform = "translateX(0)";
    }, 3000);

    // Hide the newsletter after 15 seconds
    setTimeout(() => {
        newsLetter.style.transform = "translateX(-100%)";
    }, 15000);

    // Close the newsletter manually when .fa-times is clicked
    document.querySelector(".fa-times").addEventListener("click", () => {
        newsLetter.style.transform = "translateX(-100%)";
    });
}

newsletter();
