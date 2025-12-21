const carousel = document.getElementById("profCarousel");
const nextBtn = document.getElementById("profSuivant");
const prevBtn = document.getElementById("profAvant");

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
 

fetch("../json/profs.json")
    .then(response => response.json())
    .then(data => {
        const carrousel = document.getElementById("profCarousel");
        carrousel.innerHTML = "";

        data.profs.forEach(prof => {
            const carte = document.createElement("div");
            carte.classList.add("profCarte");

            carte.style.setProperty(
                "--image-prof",
                `url(${prof.image})`
            );

            carte.innerHTML = `
                <div class="profOverlay"></div>
                <div class="profInfos">
                    <h3>${prof.nom}</h3>
                    <p>${prof.specialite}</p>
                </div>
            `;

            carte.style.backgroundImage = `url(${prof.image})`;
            carte.style.backgroundSize = "cover";
            carte.style.backgroundPosition = "center";

            carrousel.appendChild(carte);
        });
    })
    .catch(err => console.error("Erreur chargement profs :", err));
