//---------------------------------------------------------------------------
//Antroji užduotis
//---------------------------------------------------------------------------
let element = document.getElementById('mygtukas');
element.addEventListener('click', tekstoRasymas);
function tekstoRasymas(e){
    let forma=document.createElement('form');
    forma.innerHTML=
            '<label htmlFor="fname">Vardas:</label> <br>'+
            '<input type="text" id="fname" name="fname"><br>'+
            '<label htmlFor="lname">Pavardė:</label><br>'+
            '<input type="text" id="lname" name="lname"><br>'+
            '<input type="submit" value="Siųsti">';
    let div=document.querySelector('.container > .row:last-of-type');
    div.appendChild(forma);
}



