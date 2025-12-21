document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();

    if(!email || !prenom || !nom){
        alert("Veuillez remplir tous les champs obligatoires !");
        return;
    }

    const btn = document.querySelector('.boutonEnvoi button');
    btn.textContent = "Envoi en cours...";
    btn.disabled = true;

    const formElements = document.getElementById('contactForm').elements;
    
    for(let i=0; i<formElements.length; i++){
        formElements[i].disabled = true;
    }

    setTimeout(() => {
        const popup = document.getElementById('formPopup');
        popup.querySelector('h3').textContent = `Votre message a bien été envoyé, ${prenom} ${nom} !`;
        popup.querySelector('p').textContent = `Nous vous recontacterons sur ${email}.`;
        popup.style.display = 'flex';


        document.getElementById('fermerPopUp').onclick = () => {
            popup.style.display = 'none';
        };

        btn.textContent = "Envoyer";

    }, 1000); 
});


