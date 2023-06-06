function setupSlider() {
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    let shouldAutoScroll = true;
    const intervalTime = 5000;
    let slideInterval;

    // Next Button
    const nextSlide = () => {
        const current = document.querySelector(".current");
        current.classList.remove("current");
        if (current.nextElementSibling) {
            current.nextElementSibling.classList.add("current");
        } else {
            slides[0].classList.add("current");
        }
        current.classList.remove("current");
    };

    // Prev Button
    const prevSlide = () => {
        const current = document.querySelector(".current");
        current.classList.remove("current");
        if (current.previousElementSibling) {
            current.previousElementSibling.classList.add("current");
        } else {
            slides[slides.length - 1].classList.add("current");
        }
        current.classList.remove("current");
    };

    // Add EventListeners
    next.addEventListener("click", () => {
        clearInterval(slideInterval); // Clear the previous interval
        nextSlide();
        if (shouldAutoScroll) {
            slideInterval = setInterval(nextSlide, intervalTime); // Start a new interval
        }
    });

    prev.addEventListener("click", () => {
        clearInterval(slideInterval); // Clear the previous interval
        prevSlide();
        if (shouldAutoScroll) {
            slideInterval = setInterval(nextSlide, intervalTime); // Start a new interval
        }
    });

    // Auto Scroll
    if (shouldAutoScroll) {
        function auto() {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
        auto();
    }
}

setupSlider();
