let inputElements = document.querySelectorAll('input');

for (let element of inputElements){
    element.addEventListener('click',addClass);
    element.addEventListener('focus',addClass);
}

function addClass(e){
    this.setAttribute("class", "displayPseudoState");
}