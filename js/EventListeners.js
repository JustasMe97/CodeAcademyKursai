//---------------------------------------------------------------------------
//Pirmoji užduotis
//---------------------------------------------------------------------------
let element = document.getElementById('mygtukas');
element.addEventListener('click', tekstoRasymas);
function tekstoRasymas(e){
    document.getElementById('laukelis').innerHTML='Labas, pasauli!';
}




