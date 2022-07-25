
let readDoc = false;
let correctMail = false;


function checkMail(){
    let mailBar = String(document.getElementById("userMail").value);
    console.log(mailBar);
    if(mailBar.includes('@idp.es')){
        correctMail = true;
    }else{
        correctMail = false;
        document.getElementById('submit').disabled = true;
        document.getElementById('policies').disabled = true;
        
    }
}


function checkDoc(){
    readDoc = true;
}


 function checkBox(){
    let check = document.getElementById("policies");
    if(!correctMail){
        alert("Por favor, rellene el campo 'Email' con un correo válido (ejemplo@idp.es)");
        check.disabled = true;
        check.checked = false;
        document.getElementById('submit').disabled = true;
    }else if(!readDoc){
        alert("Por favor, pulse el botón rojo para acceder y leer las políticas");
    }else{
        check.removeAttribute('disabled');
        check.checked = false;
        document.getElementById('submit').disabled = false;
    }
 }

 function jsonFile(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let userInput = document.getElementById('userMail').value;
    let checkBox = document.getElementById('policies').value;
    let fileinfo = String(userInput+";"+checkBox+";"+date+";");
    $.ajax
    ({
        type: "POST",
        dataType : 'string',
        async: false,
        url: 'saveData.php',
        data: { data: fileinfo },
        success: function () {alert("Thanks!"); },
        failure: function() {alert("Error!");}
    });
 }