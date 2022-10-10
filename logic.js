


function check(obj){

    let checkboxes      = document.getElementsByClassName('checkbox');
    const qtty_boxes    = checkboxes.length;
 
    for (let index = 0; index < qtty_boxes; index++) {
            checkboxes[index].checked = false;
            // checkboxes[index].setAttribute('disabled','true');
    }
    // obj.removeAttribute('disabled');
    obj.checked = true ;
  
    console.log(obj);
    console.log("==============================================");
}

 let countCheckboxes = 0;

function check2(){
    let checkboxes      = document.getElementsByClassName('c');
    const qtty_boxes    = checkboxes.length;
    countCheckboxes;
    const maxChecks= 2;

    for (let index = 0; index < qtty_boxes; index++) {
        if (checkboxes[index].checked === true) {
            countCheckboxes++;
            if (countCheckboxes === maxChecks) {
                console.log("Màxim checkboxes clicked");
            }
        }
        
    }

}