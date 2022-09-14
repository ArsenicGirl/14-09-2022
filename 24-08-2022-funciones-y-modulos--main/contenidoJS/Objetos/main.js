'use strict';
//1. Objeto literal de Java Script
let cristian = {
    nombre: 'cristian',
    apellidos: 'Guasca',
    edad: 17,
    altura: 1.63,
    peso: 65.2, //al cerrar no hay necesidad de coma
    caminar: function (){
        return 'yo camino';
    },
    hablar: function(){
        return 'yo hablo';
    }
}
//console.log(cristian);
console.log(cristian.nombre, cristian.apellidos)
console.log(cristian.caminar());

/* no se puede
for (i of cristian){
    console.log(i);
}*/
//Object.keys(cristian).forEach((e) => console.log(e));
Object.values(cristian).forEach((e) => console.log(e));

//Traea: iterar el objeto con for
