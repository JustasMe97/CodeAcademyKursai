let skaicius=0;
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

function veiksmai(zenklas){
        document.getElementById('ats').innerHTML += '<br>' +zenklas+' funkcija: <br>';
        for (let i = 0; i < arr1.length; i++) {
            skaicius = eval(arr1[i] +zenklas+ arr2[i]);
            document.getElementById('ats').innerHTML += 'Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[i]+' "'+zenklas+'" veiksmas = '+skaicius+'<br>';
        }
}

function veiksmaiVisiSuVisais(zenklas){
        document.getElementById('ats').innerHTML +=  '<br>' +zenklas+' funkcija visi su visais: <br>';
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                skaicius = eval(arr1[i] +zenklas+ arr2[j]);
                document.getElementById('ats').innerHTML += 'Skaiciaus ' + arr1[i] + ' ir skaiciaus ' + arr2[j] +' "'+zenklas+'" veiksmas = ' + skaicius + '<br>';
            }
        }
}

veiksmai('+');
veiksmai('-');
veiksmai('/');
veiksmai('*');
veiksmaiVisiSuVisais('+');
veiksmaiVisiSuVisais('-');
veiksmaiVisiSuVisais('/');
veiksmaiVisiSuVisais('*')