const hero = document.querySelector(".hero");
const villain = document.querySelector(".vilan");

const jump = () => {
    if (!hero.classList.contains("animate")) {
        hero.classList.add("animate");
        villain.style.animation = "move 1s infinite linear";
    }
    setTimeout(() => {
        hero.classList.remove("animate");
    }, 300);
};

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        jump();
    }
});

let isAlive = setInterval(() => {
    const heroTop = parseInt(window.getComputedStyle(hero).top);
    const vilanLeft = parseInt(window.getComputedStyle(villain).left);

    if (vilanLeft < 40 && vilanLeft > 20 && heroTop >= 130) {
        villain.style.animation = "none";
        alert("Game over. Press spacebar to start");
    }
}, 10);
