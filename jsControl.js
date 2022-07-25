
let readDoc = false;
let correctMail = false;


function checkMail(){
    let mailBar = String(document.getElementById("userMail").value);
    console.log(mailBar);
    if(mailBar.includes('@idp.es')){
        correctMail = true;
    }else{
        correctMail = false;
        
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
    }else if(!readDoc){
        alert("Por favor, pulse el botón rojo para acceder y leer las políticas");
    }else{
        check.removeAttribute('disabled');
        check.checked = false;
        document.getElementById('submit').disabled = false;
    }
 }
 
 function submit(){
    let userInput = document.getElementById('userMail').value;
    let checkBox = document.getElementById('policies').value;
    let fileinfo = String(userInput+";"+checkBox);
    let content = "hello world";
    let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "usersText.txt");
 }