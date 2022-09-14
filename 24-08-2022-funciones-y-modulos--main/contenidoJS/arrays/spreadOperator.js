//operador de propagacion
'use strict';

let miArray2=[];
for(let i=0; i<25; i++){
    miArray2[i]= i +2;
}
//console.log(miArray2);
//Spread Operator ...
//console.log(...miArray2);
//Agregar elementos a un arreglo 
miArray2.push(3,78,900,1220);
//console.log(...miArray2);
let miArray3 = [...miArray2, 34, 88, 3450];
//console.log(...miArray3);
let resultado = miArray2.concat(miArray3);
//console.log(...resultado);
let arrayFinal = [...miArray2,...miArray3, ...resultado];
//console.log(...arrayFinal);

//propagación en funciones
let lenguajes = ['PHP','Java','Ruby','C#'];

const printLenguajes = (len1, len2, len3 ="Assembler", ...len4) =>{
    console.log(`*** los lenguajes TOP ***
    ${len1} -  ${len2} - ${len3} - ${len4}
    ***********************************`)
}

printLenguajes(...lenguajes, 'cobol', 'F#');