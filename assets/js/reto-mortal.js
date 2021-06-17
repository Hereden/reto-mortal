var reserva_dinero = 1000 + 800 + 500 + 300 + 140;

var billetes = [2, 4, 5, 6, 7];

function agregarBilletes() {
    billetes[0] += 5;
    billetes[1] += 2;
    billetes[2] += 3;
    billetes[3] += 4;
    billetes[4] += 10;
    reserva_dinero += 2500 + 400 + 300 + 200 + 200;
}

function quitarOficialmente(reserva_dinero_aux, billetes2) {
    reserva_dinero = reserva_dinero_aux;
    billetes = billetes2;
}


function retirar() {
    //variables a usar, una reserva aux por si no tenemos billetes suficientes para cubrir la cantidad
    var reserva_dinero_aux = reserva_dinero;
    var billetes2 = billetes;
    var cantidadRetiro = document.getElementById("efectivoRetirar").value;
    var nuevoElemento = document.createElement("span");
    var nuevoElemento2 = document.createElement("span");
    nuevoElemento.className = "text-center fs-1 fw-bold";
    var salto = document.createElement("br");
    var textoElemento;
    console.log(cantidadRetiro);
    if (reserva_dinero == 0) {
        nuevoElemento.className += " bg-danger"
        textoElemento = document.createTextNode("El cajero no tiene fondos.");
    }else if (cantidadRetiro > reserva_dinero) {
        nuevoElemento.className += " bg-danger"
        textoElemento = document.createTextNode("El cajero no tiene saldo suficiente.Elija otra cantidad");
    } else {
        var cantidadBilletes;
        var i;
        var residuo;
        var cantB;
        var textoBilletes = "";
        var d;

        residuo = cantidadRetiro % 500;
        cantB = Math.trunc(cantidadRetiro / 500);
        d = 0;
        if (cantB > 0 && billetes2[0] > 0) {
            if (billetes2[0] >= cantB) {
                billetes2[0] -= cantB;
                cantidadRetiro -= (cantB * 500);
                reserva_dinero_aux -= (cantB * 500);
                d = cantB;
            } else {
                d = billetes2[0];
                billetes2[0] = 0;
                cantidadRetiro -= (d * 500);
                reserva_dinero_aux -= (d * 500);
            }
            for (i = 0; i < d; i++) {
                cantidadBilletes = document.createElement("IMG");
                cantidadBilletes.setAttribute("src", "assets/images/500.png");
                cantidadBilletes.setAttribute("width", "100");
                cantidadBilletes.setAttribute("height", "50");
                cantidadBilletes.setAttribute("alt", "Billete 500");
                nuevoElemento2.appendChild(cantidadBilletes);
            }
            if (d > 1) {
                textoBilletes += `${d} billetes de 500 `;
            } else {
                textoBilletes += `${d} billete de 500 `;
            }
            console.log(`residuo ${residuo} y algo mas ${d}`);

        }
        residuo = cantidadRetiro % 200;
        cantB = Math.trunc(cantidadRetiro / 200);
        d = 0;
        if (cantB > 0 && billetes2[1] > 0) {
            if (billetes2[1] >= cantB) {
                billetes2[1] -= cantB;
                cantidadRetiro -= (cantB * 200);
                reserva_dinero_aux -= (cantB * 200);
                d = cantB;
            } else {
                d = billetes2[1];
                billetes2[1] = 0;
                cantidadRetiro -= (d * 200);
                reserva_dinero_aux -= (d * 200);
            }
            for (i = 0; i < d; i++) {
                cantidadBilletes = document.createElement("IMG");
                cantidadBilletes.setAttribute("src", "assets/images/200.png");
                cantidadBilletes.setAttribute("width", "100");
                cantidadBilletes.setAttribute("height", "50");
                cantidadBilletes.setAttribute("alt", "Billete 200");
                nuevoElemento2.appendChild(cantidadBilletes);
            }
            if (d > 1) {
                textoBilletes += `${d} billetes de 200 `;
            } else {
                textoBilletes += `${d} billete de 200 `;
            }
            console.log(`residuo ${residuo} y algo mas ${d}`);

        }
        residuo = cantidadRetiro % 100;
        cantB = Math.trunc(cantidadRetiro / 100);
        d = 0;
        if (cantB > 0 && billetes2[2] > 0) {
            if (billetes2[2] >= cantB) {
                billetes2[2] -= cantB;
                cantidadRetiro -= (cantB * 100);
                reserva_dinero_aux -= (cantB * 100);
                d = cantB;
            } else {
                d = billetes2[2];
                billetes2[2] = 0;
                cantidadRetiro -= (d * 100);
                reserva_dinero_aux -= (d * 100);
            }
            for (i = 0; i < d; i++) {
                cantidadBilletes = document.createElement("IMG");
                cantidadBilletes.setAttribute("src", "assets/images/100.png");
                cantidadBilletes.setAttribute("width", "100");
                cantidadBilletes.setAttribute("height", "50");
                cantidadBilletes.setAttribute("alt", "Billete 100");
                nuevoElemento2.appendChild(cantidadBilletes);
            }
            if (d > 1) {
                textoBilletes += `${d} billetes de 100 `;
            } else {
                textoBilletes += `${d} billete de 100 `;
            }
            console.log(`residuo ${residuo} y algo mas ${d}`);

        }
        if ((cantidadRetiro % 50) % 20 > 0) {
            residuo = cantidadRetiro % 20;
            cantB = Math.trunc(cantidadRetiro / 20);
            d = 0;
            if (cantB > 0 && billetes2[4] > 0) {
                if (billetes2[4] >= cantB) {
                    billetes2[4] -= cantB;
                    cantidadRetiro -= (cantB * 20);
                    reserva_dinero_aux -= (cantB * 20);
                    d = cantB;
                } else {
                    d = billetes2[4];
                    billetes2[4] = 0;
                    cantidadRetiro -= (d * 20);
                    reserva_dinero_aux -= (d * 20);
                }
                for (i = 0; i < d; i++) {
                    cantidadBilletes = document.createElement("IMG");
                    cantidadBilletes.setAttribute("src", "assets/images/20.png");
                    cantidadBilletes.setAttribute("width", "100");
                    cantidadBilletes.setAttribute("height", "50");
                    cantidadBilletes.setAttribute("alt", "Billete 20");
                    nuevoElemento2.appendChild(cantidadBilletes);
                }
                if (d > 1) {
                    textoBilletes += `${d} billetes de 20 `;
                } else {
                    textoBilletes += `${d} billete de 20 `;
                }
                console.log(`residuo ${residuo} y algo mas ${d}`);

            }
            residuo = cantidadRetiro % 50;
            cantB = Math.trunc(cantidadRetiro / 50);
            d = 0;
            if (cantB > 0 && billetes2[3] > 0) {
                if (billetes2[3] >= cantB) {
                    billetes2[3] -= cantB;
                    cantidadRetiro -= (cantB * 50);
                    reserva_dinero_aux -= (cantB * 50);
                    d = cantB;
                } else {
                    d = billetes2[3];
                    billetes2[3] = 0;
                    cantidadRetiro -= (d * 50);
                    reserva_dinero_aux -= (d * 50);
                }
                for (i = 0; i < d; i++) {
                    cantidadBilletes = document.createElement("IMG");
                    cantidadBilletes.setAttribute("src", "assets/images/50.png");
                    cantidadBilletes.setAttribute("width", "100");
                    cantidadBilletes.setAttribute("height", "50");
                    cantidadBilletes.setAttribute("alt", "Billete 50");
                    nuevoElemento2.appendChild(cantidadBilletes);
                }
                if (d > 1) {
                    textoBilletes += `${d} billetes de 50 `;
                } else {
                    textoBilletes += `${d} billete de 50 `;
                }
                console.log(`residuo ${residuo} y algo mas ${d}`);

            }
        } else {
            residuo = cantidadRetiro % 50;
            cantB = Math.trunc(cantidadRetiro / 50);
            d = 0;
            if (cantB > 0 && billetes2[3] > 0) {
                if (billetes2[3] >= cantB) {
                    billetes2[3] -= cantB;
                    cantidadRetiro -= (cantB * 50);
                    reserva_dinero_aux -= (cantB * 50);
                    d = cantB;
                } else {
                    d = billetes2[3];
                    billetes2[3] = 0;
                    cantidadRetiro -= (d * 50);
                    reserva_dinero_aux -= (d * 50);
                }
                for (i = 0; i < d; i++) {
                    cantidadBilletes = document.createElement("IMG");
                    cantidadBilletes.setAttribute("src", "assets/images/50.png");
                    cantidadBilletes.setAttribute("width", "100");
                    cantidadBilletes.setAttribute("height", "50");
                    cantidadBilletes.setAttribute("alt", "Billete 50");
                    nuevoElemento2.appendChild(cantidadBilletes);
                }
                if (d > 1) {
                    textoBilletes += `${d} billetes de 50 `;
                } else {
                    textoBilletes += `${d} billete de 50 `;
                }
                console.log(`residuo ${residuo} y algo mas ${d}`);

            }
            residuo = cantidadRetiro % 20;
            cantB = Math.trunc(cantidadRetiro / 20);
            d = 0;
            if (cantB > 0 && billetes2[4] > 0) {
                if (billetes2[4] >= cantB) {
                    billetes2[4] -= cantB;
                    cantidadRetiro -= (cantB * 20);
                    reserva_dinero_aux -= (cantB * 20);
                    d = cantB;
                } else {
                    d = billetes2[4];
                    billetes2[4] = 0;
                    cantidadRetiro -= (d * 20);
                    reserva_dinero_aux -= (d * 20);
                }
                for (i = 0; i < d; i++) {
                    cantidadBilletes = document.createElement("IMG");
                    cantidadBilletes.setAttribute("src", "assets/images/20.png");
                    cantidadBilletes.setAttribute("width", "100");
                    cantidadBilletes.setAttribute("height", "50");
                    cantidadBilletes.setAttribute("alt", "Billete 20");
                    nuevoElemento2.appendChild(cantidadBilletes);
                }
                if (d > 1) {
                    textoBilletes += `${d} billetes de 20 `;
                } else {
                    textoBilletes += `${d} billete de 20 `;
                }
                console.log(`residuo ${residuo} y algo mas ${d}`);

            }
        }

        console.log(reserva_dinero);
        console.log(reserva_dinero_aux);
        if (cantidadRetiro > 0) {

            if (cantidadRetiro % 20 > 0) {
                nuevoElemento2 = document.createElement("span");
                textoBilletes = "";
                nuevoElemento.className += " bg-warning"
                textoElemento = document.createTextNode("No hay forma de sacar esa cantidad, los billetes de cantidad minima que manejamos es de: 20");
            } else {
                nuevoElemento2 = document.createElement("span");
                textoBilletes = "";
                textoElemento = document.createTextNode(`No tenemos billetes para sacar esta cantidad: ${cantidadRetiro}`);
                nuevoElemento.appendChild(textoElemento);
            }
        } else {
            quitarOficialmente(reserva_dinero_aux, billetes2);
            textoElemento = document.createTextNode(textoBilletes);
        }


    }
    nuevoElemento.appendChild(textoElemento);
    nuevoElemento.appendChild(salto);
    nuevoElemento.appendChild(nuevoElemento2);
    nuevoElemento.appendChild(salto);

    var parentElement = document.getElementById('resultadoParent');
    var theFirstChild = parentElement.firstChild;
    parentElement.insertBefore(nuevoElemento, theFirstChild);
}