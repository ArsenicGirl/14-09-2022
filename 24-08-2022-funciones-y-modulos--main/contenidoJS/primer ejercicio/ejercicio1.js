'use strict'; //directiva que indica que estamos trabajando en modo estricto
/** 
 * comentarios de bloque
*/
/**
//declaración de variables o contenedores
var variable1 = 10; //define variables de ambito global (no es recomendable)
let variable2 = 23; //define variables de ambito local
const constante1 = 3.14; //declarar constantes

if (true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable2);
}

console.log(variable2);*/

//realizar un programa que lea 2 numeros y los sume  e imprimir resultado

let num1;
let num2;
num1 = prompt("introduzca un numero");
num2 = prompt("introduzca otro numero");
let suma = 0;
suma = parseFloat(num1) + parseFloat(num2); //parseFloat es para declarar decimal y parseInt (parseInteger) para enteros
console.log("el resuktado de la suma es:"+suma)
alert("la suma es: "+suma)
