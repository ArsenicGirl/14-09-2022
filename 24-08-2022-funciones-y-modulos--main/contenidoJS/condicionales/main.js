'use strict';
let num1;
let num2;
num = 9;
num2 = '9';

if (num1 <0){

}else if (num1 > 0){
    if ((num1 % 3 === 0) && (parseInt(num2)>0)){
        console.log("num1 es multiplo de 3 y num 2 > 0");
    }else{
        if(num1 % 2 === 0) console.log("num1 es multiplo de 2");
    }

}

//switch

let opcion;
opcion = prompt("introduzca una opcion 1-4");

switch (opcion){
    case '1':
        alert("seleccionó la opción 1");
    case '2':
        alert("seleccionó la opción 2");
    case '3':
        alert("seleccionó la opción 3");
    case '4':
        alert("seleccionó la opción 4");
    default:
        alert("seleccionó la opción invalida");

}



