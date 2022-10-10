var materies_visitant = 2;
console.log('here');
$(document).ready(function(){
    
    if ($("input[name=admin]").size() < 1) {
        check();
        $(document).on('click', '[name^=agregats]', check);
    }
});

function check() {
    maxim_materies_visitant();
    bloqueig_s1s2();
    bloqueig_n1n2();

    $('[name^=agregats][class^=disabled]').attr('disabled', true);
    $('[name^=agregats]:not([class^=disabled])').removeAttr('disabled');
}

function maxim_materies_visitant() {
    var s0 = $('.s0').find('[name^=agregats]:checked').size();
    var s1 = $('.s1').find('[name^=agregats]:checked').size();
    var s2 = $('.s2').find('[name^=agregats]:checked').size();

    if (s0+s1+s2 >= materies_visitant) {
        $('[name^=agregats]').not(':checked').addClass('disabled_maxim');
    } else {
        $('[name^=agregats]').not(':checked').removeClass('disabled_maxim');
    }

    /*if (s0 >= materies_visitant || s0 + ((s1 + s2)/2)  >= materies_visitant) {
        $('[name^=agregats]').not(':checked').addClass('disabled_s0');
    } else {
        $('[name^=agregats]').not(':checked').removeClass('disabled_s0');
    }

    if (s1 >= materies_visitant) {
        $('.s0').find('[name^=agregats]').not(':checked').addClass('disabled_s1');
    } else {
        $('.s0').find('[name^=agregats]').not(':checked').removeClass('disabled_s1');
    }

    if (s2 >= materies_visitant) {
        $('.s0').find('[name^=agregats]').not(':checked').addClass('disabled_s2');
    } else {
        $('.s0').find('[name^=agregats]').not(':checked').removeClass('disabled_s2');
    }

    if (s0 + s1 >= materies_visitant) {
        $('.s1,.s0').find('[name^=agregats]').not(':checked').addClass('disabled_s0s1');
    } else {
        $('.s1,.s0').find('[name^=agregats]').not(':checked').removeClass('disabled_s0s1');
    }

    if (s0 + s2 >= materies_visitant) {
        $('.s2,.s0').find('[name^=agregats]').not(':checked').addClass('disabled_s0s2');
    } else {
        $('.s2,.s0').find('[name^=agregats]').not(':checked').removeClass('disabled_s0s2');
    }*/
}

function bloqueig_s1s2() {
     $('.s1,.s2').find('[name^=agregats]').each(function(){

        if ($(this).closest('td').hasClass('s1')) {
            if ($(this).is(':checked')) {
                $(this).closest('tr').find('.s2').find('[name^=agregats]').addClass('disabled_s1s2_' + $(this).value);
            } else {
                $(this).closest('tr').find('.s2').find('[name^=agregats]').removeClass('disabled_s1s2_' + $(this).value);
            }
        } else if($(this).closest('td').hasClass('s2')) {
            if ($(this).is(':checked')) {
                $(this).closest('tr').find('.s1').find('[name^=agregats]').addClass('disabled_s1s2_' + $(this).value);
            } else {
                $(this).closest('tr').find('.s1').find('[name^=agregats]').removeClass('disabled_s1s2_' + $(this).value);
            }
        }
    });
}

function bloqueig_n1n2() {
    $('.s0,.s1,.s2').find('[name^=agregats]').each(function(){
        var materia = $(this).val();
        var materia2 = null;
        var materia_cercada = null;
        if (materia.substring(2,3) == '1') {
            materia2 = materia.substring(0,2) + '2' + materia.substring(3);
            materia_cercada = $('.mod').find('.s0,.s1,.s2').find('[name^=agregats][value='+materia2+']').val(); 
            if (typeof materia_cercada === 'undefined') {
                materia2 = materia.substring(0,2) + '2' + materia.substring(3,4) + '0' + materia.substring(5) ;
            }
        }else if (materia.substring(2,3) == '2') {
            materia2 = materia.substring(0,2) + '1' + materia.substring(3);
            materia_cercada = $('.mod').find('.s0,.s1,.s2').find('[name^=agregats][value='+materia2+']').val();
            if (typeof materia_cercada === 'undefined') {
                materia2 = materia.substring(0,2) + '1' + materia.substring(3,4) + '1' + materia.substring(5) ;
            }
        }else {
            return;
        }

        if ($(this).is(':checked')) {
            $('.mod').find('.s0,.s1,.s2').find('[name^=agregats][value='+materia2+']').addClass('disabled_n1n2_' + materia2);
        } else {
            $('.mod').find('.s0,.s1,.s2').find('[name^=agregats][value='+materia2+']').removeClass('disabled_n1n2_' + materia2);
        }
    });
}