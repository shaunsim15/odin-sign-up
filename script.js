function triggersAfterInteraction(e){
    this.classList.add("displayPseudoState");
}

function checkPasswords(e){
    if (password.value === confirmPassword.value){
        confirmPassword.classList.remove('confirmationError');
    }
    else{
        confirmPassword.classList.add('confirmationError');
    }
}

let inputElements = document.querySelectorAll('input');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');

for (let element of inputElements){
    element.addEventListener('click',triggersAfterInteraction);
    element.addEventListener('focus',triggersAfterInteraction);
}

password.addEventListener('change',checkPasswords);
confirmPassword.addEventListener('change',checkPasswords);