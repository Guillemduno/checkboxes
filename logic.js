


function maxim_materies_visitant(container, numero_materies_seleccionables) {

    const maxim_materies    = numero_materies_seleccionables;
    const myContainer       = document.getElementById(container);

    // Selecció tots checbox checked
    let qtty_mat_selec = myContainer.querySelectorAll('input[type="checkbox"]:checked');

    // Selecció tots checbox not checked
    let qtty_mat_not_selec = myContainer.querySelectorAll('input[type="checkbox"]:not(:checked)');

    if ( qtty_mat_selec.length >= maxim_materies) {
        //console.log('No pots seleccionar més matèries....');

        for (let i = 0; i < qtty_mat_not_selec.length; ++i) {
            qtty_mat_not_selec[i].setAttribute('disabled', true);
        }
    } else {
        for (let i = 0; i < qtty_mat_not_selec.length; ++i) {
            qtty_mat_not_selec[i].removeAttribute('disabled', true);
        }
    }
}
