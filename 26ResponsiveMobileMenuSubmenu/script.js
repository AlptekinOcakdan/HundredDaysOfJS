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
    hideMenu();
}

// RESPONSIVE MOBILE MENU
const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menuWrapper.style.transform = "translateX(0)";
    menu.style.transform = "translateX(0)";
};

const hideMenu = () => {
    close.style.transform = "translateY(-20rem)";
    hamburger.style.display = "block";
    menuWrapper.style.transform = "translateX(-200%)";
    menu.style.transform = "translateX(200%)";
    subMenuTree.style.transform = "translateX(-100%)";
};

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);

// Submenu Section
const thirdLink = document.querySelector(".third-link");
const back = document.querySelector(".back-to-menu");
const subMenuTree = document.querySelector(".submenu-tree");

thirdLink.addEventListener("click", () => {
    menu.style.transform = "translateX(-100%)";
    subMenuTree.style.transform = "translateX(0)";
});

back.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
    subMenuTree.style.transform = "translateX(-100%)";
});


function handleResize() {
    if (window.innerWidth >= 600) {
        menuWrapper.style.transform = "translateX(0)";
        menu.style.transform = "translateX(0)";
    } else {
        menuWrapper.style.transform = "translateX(-200%)";
        menu.style.transform = "translateX(200%)";
    }
}

window.addEventListener("resize", handleResize);

handleResize();