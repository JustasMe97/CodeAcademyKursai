//---------------------------------------------------------------------------
//Trečioji užduotis
//---------------------------------------------------------------------------
let element = document.getElementById('mygtukas');
element.addEventListener('click', mygtukoPaspaudimas);
function mygtukoPaspaudimas(e){
    iterptiEilute(document.getElementById('vardas').value, document.getElementById('pavarde').value)
}
function iterptiEilute(vardas, pavarde){
    let duomenys=document.createElement('tr');
    duomenys.innerHTML='<td>'+vardas+'</td><td>'+pavarde+'</td>';
    let lentele=document.getElementById('duomenuVieta');
    lentele.appendChild(duomenys);
}



