'use strict';
//1. Volver una cadena a arreglo
let CadenaDias= "lunes_martes_miercoles_jueves_viernes_sabado_domingo";
let miArray =  CadenaDias.split("_");
//console.log(miArray);

//2. Buscar (si no encuntra el valor, devuelve undefined)
//funcion anonima ()=> clásica function(){}

const result = miArray.find((e)=> e === "viernes");
//console.log(result);
const index = miArray.findIndex(((e)=> e === "lunes"));
//console.log(index);

//3. Comprueba si existe un elemento dentro de un array true o false
//console.log(miArray.includes("viernes'nt"));

//4. Filtrar elementos
let miArray2=[];
for(let i=0; i<25; i++){
    miArray2[i]= i + 3;
}
console.log(miArray2);
const response = miArray.filter((e) => e % 2 === 0);
console.log(response);

//map, some, every, reduce, concat