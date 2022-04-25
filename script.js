function triggersAfterInteraction(e){
    this.classList.add("displayPseudoState");
}

function checkPasswords(e){
    if (password.value === confirmPassword.value){
        confirmPassword.classList.remove('confirmationError');
        confirmPassword.setCustomValidity('');
    }
    else{
        confirmPassword.classList.add('confirmationError');
        confirmPassword.setCustomValidity('Make sure passwords match!');
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
confirmPassword.addEventListener('keyup',checkPasswords);