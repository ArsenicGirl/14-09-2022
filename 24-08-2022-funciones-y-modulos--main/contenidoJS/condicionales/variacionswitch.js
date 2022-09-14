'use strict'

let nota;
nota = 5.0;
let mensaje;
mensaje ="";

switch(true){
    case nota >= 0 && nota <= 2.9:
        //Template string
        mensaje = `Insuficiente la calificación: ${nota}`;
        break;
    case nota >= 3.0 && nota <= 3.5:
        //Template string
        mensaje = `Regular la calificación: ${nota}`;
        break;
    case nota >= 3.6 && nota <= 2.9:
        //Template string
        mensaje = `Bien la calificación: ${nota}`;
        break;
    case nota >= 4.1 && nota <= 4.5:
        //Template string
        mensaje = `Muy bien la calificación: ${nota}`;
        break;
    case nota >= 4.6 && nota <= 5.0:
        //Template string
        mensaje = `Excelente la calificación: ${nota}`;
        break;
    default: 
    mensaje = `La calificación no puede ser procesada: ${nota}`;

}

console.log(mensaje);