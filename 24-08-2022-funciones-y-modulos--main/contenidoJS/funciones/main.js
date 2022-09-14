'use strict';
//    Funcion clasica en JS
//function nombreFuncion(/**recibo de parámetros */){
    /**Cuerpo de la funcion */
  /**   return 0;

}*/
//Invocacion de la funcion
//nombreFuncion();

function suma (num1=0, num2=0){
    return num1 + num2;
}

let result=0;
result= suma(3,5);
console.log(result)

//Funcion tipo Flecha
const resta = (num1=1,num2=1) => {
    return num1 - num2;
}

console.log(resta(12,67));
