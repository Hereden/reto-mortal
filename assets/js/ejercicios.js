
/* 1.-Obtener 2 numeros: */


/* let numero2=parseFloat(prompt("numero 2:"));
isNaN -> false=numero true=texto
console.log(isNaN(123)); ->false si no es un texto ->true
console.log(isNaN("hola")); ->true */

var numero1;
var numero2;
do{
  numero1=parseFloat(prompt("numero 1:"));
}while(isNaN(numero1))
do{
  numero2=parseFloat(prompt("numero 2:"));
}while(isNaN(numero2))

/* haz:
 pedir numero 1
mientras(que numero1 no sea un numero) */



/* while(condicion terminante){}
for(inicializar;condicion terminante;incremento){} */

//Este solo si quitan el do while
/* if(!isNaN(numero1)){
  document.write(`<h1>El numero1: ${numero1} no es un numero`);
}else if(!isNaN(numero2)){
  document.write(`<h1>El numero2: ${numero2} no es un numero`);
}else  */
console.log(numero1<=0);
console.log(numero1);
if(numero1<=0){
  document.write(`<h1>El numero1: ${numero1} es menor o igual a 0`);
}else if(numero2<=0){
  document.write(`<h1>El numero2: ${numero2} es menor o igual a 0`);
}else{
if(numero1==numero2){
  document.write(`<h1>El numero 1: ${numero1} es igual al numero 2: ${numero2}</h1>`);
}else if(numero1>numero2){
  document.write(`<h1>El numero 1: ${numero1} es mayor al numero 2: ${numero2}</h1>`);
}else{
  document.write(`<h1>El numero 2: ${numero2} es mayor al numero 1: ${numero1}</h1>`);
}
}

/* si los numeros no son numeros:
saber si num1 es numero
saber si num2 es numero
si los numeros son iguales a 0:
si num1 es menor o igual a 0
si num2 es menor o igual a 0 */




/* 
num1=5 num2=12
si son iguales:
  imprimir que son iguales.
sino si num1 > num2:
  imprimir num1 es mayor que num2
sino:
   imprimir num2 es mayor que num1


Obtener 2 numeros y compararlos
mayor, menor o iguales

si los numeros no son numeros o si
son iguales a 0 */