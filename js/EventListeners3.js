//---------------------------------------------------------------------------
//Trečioji užduotis
//---------------------------------------------------------------------------
let element = document.getElementById('mygtukas');
element.addEventListener('click', mygtukoPaspaudimas);
function mygtukoPaspaudimas(e){
    iterptiEilute(document.getElementById('vardas').value, document.getElementById('pavarde').value)
}
function iterptiEilute(vardas, pavarde){
    let eile=document.createElement('tr');
    let col1=document.createElement('td');
    let col2=document.createElement('td');
    col1.innerHTML=vardas;
    col2.innerHTML=pavarde;
    eile.appendChild(col1);
    eile.appendChild(col2);
    let lentele=document.getElementById('duomenuVieta');
    lentele.appendChild(eile);

}



