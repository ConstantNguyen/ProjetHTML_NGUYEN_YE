fetch("../json/majeurs.json")
    .then(response => response.json())
    .then(majeurs => {
        const container = document.getElementById("majeurs-container");

        majeurs.forEach(m => {
            const card = document.createElement("div");
            card.classList.add("majeur-card");

            if (m.highlight) {
                card.classList.add("majeur-highlight");
            }

            card.textContent = m.nom;
            container.appendChild(card);
        });
    })
    .catch(error => console.error("Erreur chargement majeurs :", error));
