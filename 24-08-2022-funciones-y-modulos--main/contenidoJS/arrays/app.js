'use strict';

let miArreglo = [2,45,2,32,8,1,true,'78',"Hola Mundo :D"];
let miArreglo2 = [2,3,1,6]
miArreglo.push(56,9,8);
//miArreglo = [2,45,2,32,8,1,true,'78',"Hola Mundo :D"];

for(let i=0;i<miArreglo.length;i++){
    //console.log(miArreglo[i]);
}

//variaciones del for
;
for(let j of miArreglo2){
    //console.log(j);
}

for(let j in miArreglo2){
    //console.log(miArreglo2[j]);
}

miArreglo2.forEach((e)=>{
    //console.log(e);
});

miArreglo2.forEach(function(e){
    console.log(e);
});
