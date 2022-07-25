let readDoc = false;
let correctMail = false;


function checkMail(){
    let mailBar = String(document.getElementById("userMail").value);
    let checkBox = document.getElementById("policies");
    console.log(mailBar);
    if(mailBar.includes('@idp.es')){
        checkBox.removeAttribute('disabled');
        correctMail = true;
    }else{
        checkBox.setAttribute('disabled','');
        checkBox.checked = false;
        correctMail = false;
    }
}


function checkDoc(){
    readDoc = true;
    
}



 function checkBox(){
    let check = document.getElementById("policies");
    console.log(check.attributes);
    if(check.getAttribute('disabled')!=null){
        alert("Por favor, rellene el campo 'Email' con un correo válido (ejemplo@idp.es)");
    }else{
        check.checked = false;
    }
 }