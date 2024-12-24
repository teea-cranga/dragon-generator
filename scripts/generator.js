window.onload=function(){
    //declare the buttons
    let butType = document.getElementById('butType');
    let butElem = document.getElementById('butElem');
    let butWing = document.getElementById('butWing');
    let butPrim = document.getElementById('butPrim');
    let butSec = document.getElementById('butSec');
    let butTert = document.getElementById('butTert');

    //declare the inputs
    let statBody = document.getElementById('statBody');
    let statElem = document.getElementById('statElem');
    let statWing = document.getElementById('statWing');
    let statCol1 = document.getElementById('statCol1');
    let statCol2 = document.getElementById('statCol2');
    let statCol3 = document.getElementById('statCol3');

    //generating values
    butType.addEventListener('click', ()=>{
        generate(butType.id);
    });

    butElem.addEventListener('click', ()=>{
        generate(butElem.id);
    });

    butWing.addEventListener('click', ()=>{
        generate(butWing.id);
    });

    butPrim.addEventListener('click', ()=>{
        generate(butPrim.id);
    });

    butSec.addEventListener('click', ()=>{
        generate(butSec.id);
    });

    butTert.addEventListener('click', ()=>{
        generate(butTert.id);
    });

}