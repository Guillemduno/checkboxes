
const maxim_materies = 2;

$(document).ready(function(){
    $(document).on('click', '[name^=testCheckboxes]', maxim_materies_visitant);
});

function maxim_materies_visitant() {

    // Selecció tots checbox checked
    let qtty_mat_selec = document.querySelectorAll('input[type="checkbox"]:checked');

    // Selecció tots checbox not checked
    let qtty_mat_not_selec = document.querySelectorAll('input[type="checkbox"]:not(:checked)');

    if ( qtty_mat_selec.length >= maxim_materies) {
        console.log('No pots seleccionar més matèries....');

        for (let i = 0; i < qtty_mat_not_selec.length; ++i) {
            qtty_mat_not_selec[i].setAttribute('disabled', true);
            console.log(i+"bucle");
        }
    } else {
        for (let i = 0; i < qtty_mat_not_selec.length; ++i) {
            qtty_mat_not_selec[i].removeAttribute('disabled', true);
            console.log(i+"bucle");
        }
    }
}

