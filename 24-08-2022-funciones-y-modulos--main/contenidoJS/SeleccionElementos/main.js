'use strict';
//seleccionar por id
const parrafo1 = document.getElementById('parrafo1');

//selecccion por atributo name
let nameParrafo = document.getElementByName('parra2');
//console.log(nameParrafo);

//seleccion por class
let elemento = document.getElementsByClassName('parrafo');
//console.log(elemento);
//Query Selector por id #
const parrafouno = document.querySelector('#parrafo1');
const elementEtiqueta = document.querySelector('h1');
const elementClass = document.querySelector('.ejemplo');
///seleccionar todos los elementos p
const todosP = document.querySelectorAll("p");
console.log(todosP);
/*
function print(){
const valor = document.getElementById("edad").ariaValueMax;
alert("La edad es:"+valor)
}*/

const print1 =() =>{
    const valor = document.getElementById("edad").value;
    console.log("La edad es:"+valor)
}
