// Type your code here
//Actividad P2P del módulo 1

let hora=new Date().getHours();
let saludo="\n Buenas noches";
if (hora<12) {
   saludo="\n Buenas días";
} else if (hora<21) {
   saludo="\n Buenas tardes";
}
console.log(`${saludo}, son las ${hora} horas`); //comillas invertidas
console.log("\n"+(Math.PI).toFixed(6));

function formato(cadena) {
   k=cadena.length;
   return ("     "+cadena).substring(k,5+k);
}

function binOctHex(n) {
   let nDec,nBin,nOct,nHex;
   nDec=formato((n).toString(10));
   nBin=formato((n).toString(2));
   nOct=formato((n).toString(8));
   nHex=formato((n).toString(16));
   console.log(" "+nDec+"  "+nBin+" "+nOct+" "+nHex+"\n");
}

//Conversión de un número decimal [0,22] a binario, octal y hexadecimal
console.log("\n"+"   Dec    Bin   Oct   Hex");
n=0;
do {
   binOctHex(n);
   n++;
} while (n<23);

//Conversión de un número decimal [0, 21] a binario, octal y hexadecimal
//Imprimiendo solo los números impares, sin incluir el rango 10-20
console.log("\n"+"   Dec    Bin   Oct   Hex");
n=0;
do {
   if ((n%2) && ((n<10) || (n>20))) binOctHex(n);
   n++;
} while (n<22);

//Codigo escapados UNICODE para decir "hola" en chino
//\u55e8\uff0c\u4f60\u597d\u5417
console.log("\u55e8\uff0c\u4f60\u597d\u5417")

//Fin del programa
console.log("\n El programa ha terminado");
