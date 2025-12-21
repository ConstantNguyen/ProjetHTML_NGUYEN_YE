fetch("../json/majeures.json")
    .then(response => response.json())
    .then(majeurs => {
        const containerInitiale = document.getElementById("majeurs-container");
        const containerAlternance = document.getElementById("majeurs-alternance-container");

        majeurs.forEach(m => {

            const card = document.createElement("div");
            card.classList.add("majeur-card");

            if (m.highlight) {
                card.classList.add("majeur-highlight");
                card.textContent = m.nom;
                containerAlternance.appendChild(card);
            } else {
                card.textContent = m.nom;
                containerInitiale.appendChild(card);
            }

            
        });
    })
    .catch(error => console.error("Erreur chargement majeurs :", error));
