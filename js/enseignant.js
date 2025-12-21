const carousel = document.getElementById("profCarousel");
const nextBtn = document.getElementById("nextProf");
const prevBtn = document.getElementById("prevProf");

const scrollAmount = 300;

nextBtn.addEventListener("click", () => {
    carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});
 