fetch('../json/liste-cours.json')
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById('liste-cours');
    container.innerHTML = "";

    data.cours.forEach(cours => {

      const carte = document.createElement('div');
      carte.classList.add('carte');

      carte.innerHTML = `
        <div class="cours-container">
          <div class="carte-cours">
            <div class="recto">
              <div class="identite">
                <img src="./../img/cours/${cours.image}" alt="Logo" draggable="false">
                <span>${cours.titre}</span>
              </div>
              <div class="tags">
                <span><i class="fa-solid fa-briefcase"></i>${cours.module}</span>
                <span><i class="fa-regular fa-circle-user"></i>${cours.intervenant}</span>
              </div>
            </div>

            <div class="verso">
              <div class="description-container">
                <div class="description-content">
                  ${cours.description_courte}
                </div>
              </div>

              <div class="fin-verso">

                <div class="btn-souhait en-savoir-plus" data-id="${cours.id}">
                  <span>En savoir plus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      container.appendChild(carte);
    });

  })
  .catch(error => console.error('Erreur JSON :', error));
