const links = document.querySelectorAll(".nav-list li a");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

for (let link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
    hideMenu();
}


const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menu.style.transform = "translateY(0)";
};

const hideMenu = () => {
    close.style.transform = "translateY(-20rem)";
    hamburger.style.display = "block";
    menu.style.transform = "translateY(-200%)";
};

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);

function handleResize() {
    if (window.innerWidth >= 600) {
        menu.style.transform = "translateY(0)";
    } else {
        menu.style.transform = "translateY(-200%)";
    }
}

window.addEventListener("resize", handleResize);

handleResize();
