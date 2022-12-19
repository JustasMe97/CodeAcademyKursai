//---------------------------------------------------------------------------
//Ketvirtoji užduotis
//---------------------------------------------------------------------------
let element = document.getElementById('laukelis');

element.addEventListener('input', tekstoRasymas);
function tekstoRasymas(e){
    let tekstas=document.getElementById('laukelis').value;
    document.getElementById('realtime').innerHTML=tekstas;
}




