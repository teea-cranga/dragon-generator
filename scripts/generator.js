window.onload=function(){
    //declare the buttons
    let butType = document.getElementById('butType');
    let butElem = document.getElementById('butElem');
    let butWing = document.getElementById('butWings');
    let butPrim = document.getElementById('butPrim');
    let butSec = document.getElementById('butSec');
    let butTert = document.getElementById('butTert');

    //declare the inputs
    let statBody = document.getElementById('statBody');
    let statElem = document.getElementById('statElem');

    butType.addEventListener('click', ()=>{
        generateBody();
    });

    butElem.addEventListener('click', ()=>{
        generateElement();
    });
}