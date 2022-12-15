let skaicius=0;
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
function add(){
    document.getElementById('ats').innerHTML+='<br> Sudeties funkcija: <br>';
    for(let i=0; i<arr1.length; i++){
        skaicius=arr1[i]+arr2[i];
        document.getElementById('ats').innerHTML+='Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[i]+' sudetis = '+skaicius+'<br>';
    }

}
function sub(){
    document.getElementById('ats').innerHTML+='<br> Atimties funkcija: <br>';
    for(let i=0; i<arr1.length; i++){
        skaicius=arr1[i]-arr2[i];
        document.getElementById('ats').innerHTML+='Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[i]+' atimtis = '+skaicius+'<br>';
    }

}
function div(){
    document.getElementById('ats').innerHTML+='<br> Dalybos funkcija: <br>';
    for(let i=0; i<arr1.length; i++){
        skaicius=arr1[i]/arr2[i];
        document.getElementById('ats').innerHTML+='Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[i]+' dalyba = '+skaicius.toFixed(2)+'<br>';
    }
}
function mult(){
    document.getElementById('ats').innerHTML+='<br> Daugybos funkcija: <br>';
    for(let i=0; i<arr1.length; i++){
        skaicius=arr1[i]*arr2[i];
        document.getElementById('ats').innerHTML+='Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[i]+' daugyba = '+skaicius+'<br>';
    }
}

function addVisiSuVisais(){
    document.getElementById('ats').innerHTML+='<br> Sudeties visi su visais funkcija: <br>';
    for(let i=0; i<arr1.length; i++){
        for(let j=0;j<arr2.length; j++){
            skaicius=arr1[i]+arr2[j];
            document.getElementById('ats').innerHTML+='Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[j]+' sudetis = '+skaicius+'<br>';
        }
    }
    }

function subVisiSuVisais(){
    document.getElementById('ats').innerHTML+='<br> Atimties visi su visais funkcija: <br>';
    for(let i=0; i<arr1.length; i++){
        for(let j=0;j<arr2.length; j++){
            skaicius=arr1[i]-arr2[j];
            document.getElementById('ats').innerHTML+='Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[j]+' atimtis = '+skaicius+'<br>';
        }
    }
}
function divVisiSuVisais(){
    document.getElementById('ats').innerHTML+='<br> Dalybos visi su visais funkcija: <br>';
    for(let i=0; i<arr1.length; i++){
        for(let j=0;j<arr2.length; j++){
            skaicius=arr1[i]/arr2[j];
            document.getElementById('ats').innerHTML+='Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[j]+' dalyba = '+skaicius.toFixed(2)+'<br>';
        }
    }
}
function multVisiSuVisais(){
    document.getElementById('ats').innerHTML+='<br> Daugybos visi su visais funkcija: <br>';
    for(let i=0; i<arr1.length; i++){
        for(let j=0;j<arr2.length; j++){
            skaicius=arr1[i]*arr2[j];
            document.getElementById('ats').innerHTML+='Skaiciaus ' + arr1[i]+' ir skaiciaus '+arr2[j]+' daugyba = '+skaicius+'<br>';
        }
    }
}

add();
sub();
div();
mult();
addVisiSuVisais();
subVisiSuVisais();
divVisiSuVisais();
multVisiSuVisais()