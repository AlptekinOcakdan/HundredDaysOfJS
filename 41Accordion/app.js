const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        const description = this.nextElementSibling;
        const activeAccordions = document.querySelectorAll(".accordion.active");

        if (description.style.maxHeight) {
            description.style.maxHeight = null;
            this.classList.remove("active");
        } else {
            activeAccordions.forEach((activeAccordion) => {
                activeAccordion.classList.remove("active");
            });

            document.querySelectorAll(".desc").forEach((desc) => {
                desc.style.maxHeight = null;
            });

            description.style.maxHeight = description.scrollHeight + "px";
            this.classList.add("active");
        }
    });
});
