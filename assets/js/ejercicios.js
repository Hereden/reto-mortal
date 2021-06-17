/* 1. Programa que pida dos numeros y 
nos diga cual es el mayor, el menor y 
si son iguales */
function comparar(){
    
    var numero1 =parseFloat(document.getElementById("numero1").value);
    var numero2 =parseFloat(document.getElementById("numero2").value);
    if(!isNaN(numero1) && !isNaN(numero2)){
        document.write("<h1>Uno de los dos o los dos no son numero</h1>")
        console.log("NO");
    }
}
/* 2. PLUS: Si los numeros no son un número o 
son menores o iguales a cero, 
nos vuelva a pedir */
