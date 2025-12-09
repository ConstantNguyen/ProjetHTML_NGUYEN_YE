document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".cours-container").forEach(container => {

        container.addEventListener("mouseenter", () => {
            const descriptionContainer = container.querySelector(".description-container");
            const descriptionContent = descriptionContainer.querySelector(".description-content");

            if (descriptionContent.offsetHeight >= 130) {
                descriptionContent.classList.add("defilement");
            }
        });

        container.addEventListener("mouseleave", () => {
            const descriptionContent = container.querySelector(".description-content");
            descriptionContent.classList.remove("defilement");
        });
    });


    const categorieSelect = document.getElementById("CategorieFiltre");
    const filtresActifs = document.getElementById("FiltresActifs");

    categorieSelect.addEventListener("change", () => {
        const categorieValue = categorieSelect.value;

        if (categorieValue !== "" && !filtreExisteDeja(categorieValue)) {

            // création du span filtre
            const nouveauFiltre = document.createElement("span");
            nouveauFiltre.classList.add("filtre-actif");

            // texte
            const texte = document.createElement("span");
            texte.textContent = categorieValue;

            // icône de suppression
            const croix = document.createElement("i");
            croix.classList.add("fa-solid", "fa-xmark", "croix-suppression");

            // suppression au clic
            croix.addEventListener("click", () => {
                nouveauFiltre.remove();
            });

            // assemblage
            nouveauFiltre.appendChild(texte);
            nouveauFiltre.appendChild(croix);

            // ajout dans la liste
            filtresActifs.appendChild(nouveauFiltre);
        }
    });


    function filtreExisteDeja(nomFiltre) {
        const filtres = document.querySelectorAll("#FiltresActifs .filtre-actif span:first-child");

        for (const f of filtres) {
            if (f.textContent === nomFiltre) {
                return true;
            }
        }
        return false;
    }

    document.getElementById("AjouterFiltres").addEventListener("click", () => {
        document.getElementById("ChoixFiltres").classList.toggle("active");
    });


    document.querySelectorAll(".cours-container").forEach(container => {
        container.addEventListener("click", () => {
            const carte = container.querySelector(".carte-cours");
            carte.classList.toggle("turn");
        });
    });

});
