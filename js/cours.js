$(document).ready(function() {
    // Au survol de cours-container
    $('.cours-container').hover(function() {
        let descriptionContainer = $(this).find('.description-container');
        let descriptionContent = descriptionContainer.find('.description-content');
        if (descriptionContent.height() >= 130) {
            descriptionContent.addClass('defilement');
        }
    }, function() {
        $(this).find('.description-content').removeClass('defilement');
    });

    $('#CategorieFiltre').change(function() {

        let categorieValue = $(this).val();

        if (categorieValue !== "" && !filtreExisteDeja(categorieValue)) {

            let nouveauFiltre = $('<span>', {
                class: 'filtre-actif'
            });

            nouveauFiltre.append($('<span>', {text: categorieValue}));

            let croixSuppression = $('<i>', {
                class: 'fa-solid fa-xmark croix-suppression',
                text: ''
            });

            croixSuppression.click(function() {
                $(this).parent().remove(); 
            });


            nouveauFiltre.append(croixSuppression);

            $('#FiltresActifs').append(nouveauFiltre);
        }
    });


    function filtreExisteDeja(nouveauFiltre) {
        let filtresActifs = $('#FiltresActifs .filtre-actif span');
        let existeDeja = false;

        filtresActifs.each(function() {
            if ($(this).text() === nouveauFiltre) {
                existeDeja = true;
                return false; 
            }
        });

        return existeDeja;
    }

    $('#AjouterFiltres').click(function() {
        $('#ChoixFiltres').toggleClass('active');
    });

    $('.cours-container').click(function() {
        $(this).find('.carte-cours').toggleClass('turn')
    });
});
