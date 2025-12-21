let coursData = [];

fetch('../json/liste-cours.json')
  .then(res => res.json())
  .then(data => {
    coursData = data.cours;

    // Event delegation pour "En savoir plus"
    const overlay = document.getElementById("popupZone");
    const closeBtn = document.getElementById("fermerPopup");

    const modalTitre = document.getElementById("moduleTitre");
    const modalModule = document.getElementById("module");
    const modalProfNom = document.getElementById("moduleProfNom");
    const modalProfImg = document.getElementById("moduleProfImg");
    const modalDescription = document.getElementById("modulDescription");

    document.getElementById("liste-cours").addEventListener("click", e => {
      const btn = e.target.closest(".en-savoir-plus");
      if (!btn) return;

      const id = parseInt(btn.dataset.id);
      if (!id) return;

      const cours = coursData.find(c => c.id === id);
      if (!cours) return;

      modalTitre.textContent = cours.titre;
      modalModule.textContent = cours.module;
      modalProfNom.textContent = cours.intervenant;
      modalProfImg.src = cours.image_prof;
      modalProfImg.alt = cours.intervenant;
      modalDescription.textContent = cours.description_longue;

      overlay.classList.remove("hidden");
      document.body.classList.add("moduleOuvert");
    });

    closeBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
      document.body.classList.remove("moduleOuvert");
    });

    overlay.addEventListener("click", e => {
      if (e.target === overlay) {
        overlay.classList.add("hidden");
        document.body.classList.remove("moduleOuvert");
      }
    });

  })
  .catch(err => console.error("Erreur chargement coursData :", err));



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


const btnRechercher = document.getElementById("btnRechercher");

btnRechercher.addEventListener("click", () => {
    alert("Fonctionnalité pas implémentée, car on ne peut pas utiliser Ajax et Jquery, ce qui nous ferait perdre du temps");

});




/**********************************************************************************************/

const overlay = document.getElementById("popupZone");
const closeBtn = document.getElementById("fermerPopup");
const modalTitre = document.getElementById("moduleTitre");
const modalModule = document.getElementById("module");
const modalProfNom = document.getElementById("moduleProfNom");
const modalProfImg = document.getElementById("moduleProfImg");
const modalDescription = document.getElementById("modulDescription");


document.addEventListener("click", e => {

    const btn = e.target.closest(".en-savoir-plus");
    if (!btn) return;

    e.stopPropagation();

    const id = parseInt(btn.dataset.id);
    if (!id) return;

    const cours = coursData.find(c => c.id === id);
    if (!cours) return;

    modalTitre.textContent = cours.titre;
    modalModule.textContent = cours.module;
    modalProfNom.textContent = cours.intervenant;
    modalProfImg.style.backgroundImage = `url(${cours.image_prof})`;
    modalProfImg.alt = cours.intervenant;
    modalDescription.textContent = cours.description_longue;

    overlay.classList.remove("hidden");
    document.body.classList.add("moduleOuvert");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    document.body.classList.remove("moduleOuvert");
});

overlay.addEventListener("click", e => {
    if (e.target === overlay) {
        overlay.classList.add("hidden");
        document.body.classList.remove("moduleOuvert");
    }
});


