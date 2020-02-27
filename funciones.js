document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("+").addEventListener("click", o1);
document.getElementById("-").addEventListener("click", o2);
document.getElementById("*").addEventListener("click", o3);
document.getElementById("/").addEventListener("click", o4);
document.getElementById("igual").addEventListener("click", showresult);
document.getElementById("AC").addEventListener("click", borrar);



function n1(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n1").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n2(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n2").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n3(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n3").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n4(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n4").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n5(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n5").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n6(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n6").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n7(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n7").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n8(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n8").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n9(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n9").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}
function n0(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n0").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function n0(){
        let actual = document.getElementById("pantallaRes").innerHTML;
        let sumado= document.getElementById("n0").innerHTML;
        document.getElementById("pantallaRes").innerHTML = actual + sumado;

}


function o1(){
    let actual = document.getElementById("pantallaRes").innerHTML;
    let sumado= document.getElementById("+").innerHTML;
    document.getElementById("pantallaRes").innerHTML = actual + sumado;
}

function o2(){
    let actual = document.getElementById("pantallaRes").innerHTML;
    let sumado= document.getElementById("-").innerHTML;
    document.getElementById("pantallaRes").innerHTML = actual + sumado;
}

function o3(){
    let actual = document.getElementById("pantallaRes").innerHTML;
    let sumado= document.getElementById("*").innerHTML;
    document.getElementById("pantallaRes").innerHTML = actual + sumado;
}

function o4(){
    let actual = document.getElementById("pantallaRes").innerHTML;
    let sumado= document.getElementById("/").innerHTML;
    document.getElementById("pantallaRes").innerHTML = actual + sumado;
}
function borrar(){
    let actual = document.getElementById("pantallaRes").innerHTML;
    let sumado= document.getElementById("/").innerHTML;
    document.getElementById("pantallaRes").innerHTML="";

}

function showresult(){
    let actual = document.getElementById("pantallaRes").innerHTML;
    let suma = actual.indexOf('+');
    let resta = actual.indexOf('-');
    let multiplicacion = actual.indexOf('*');
    let division = actual.indexOf('/');
    if(suma !== -1){
arr = actual.split('+',2);
res = Math.trunc(Number(arr[0]) + Number(arr[1]));
document.getElementById('pantallaRes').innerHTML = res;
    }
    else if(resta !== -1){
        arr = actual.split('-',2);
res = Math.trunc(Number(arr[0]) - Number(arr[1]));
document.getElementById('pantallaRes').innerHTML = res;
    }
    else if(multiplicacion !== -1){
        arr = actual.split('*',2);
        res = Math.trunc(Number(arr[0]) * Number(arr[1]));
        document.getElementById('pantallaRes').innerHTML = res;
    }
    else if(division !== -1){
        arr = actual.split('/',2);
        res = Math.trunc(Number(arr[0]) / Number(arr[1]));
        document.getElementById('pantallaRes').innerHTML = res;
    }
   
}

