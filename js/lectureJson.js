fetch('../json/liste-cours.json')
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById('liste-cours');

    // Boucle sur chaque cours
    data.cours.forEach(cours => {

      const carte = document.createElement('div');
      carte.classList.add('carte');
      carte.innerHTML = `
          <div class="carte">
          <div class="cours-container">
            <div class="carte-cours">
              <div class="recto">
                <div class="identite">
                  <img src="./../img/book-open-solid-full.svg" alt="Logo" draggable="false">
                  <span>${cours.titre}</span>
                </div>
                <div class="tags">

                  <span><i class="fa-solid fa-briefcase"></i>${cours.module}</span>
                  <span><i class="fa-regular fa-circle-user ic-wm-el-header"></i></i>${cours.intervenant}</span>
                </div>
              </div>
              <div class="verso">
                <div class="description-container">
                  <div class="description-content">
                    ${cours.description}
                  </div>
                </div>
                <div class="fin-verso">
                  <div class="lien-site">
                    <a href="#" class="hover-underline-active">${cours.autre}</a>
                  </div>
                  <div class="btn-souhait">
                    <span>En savoir plus</span>
                  </div>
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


      





