let hora=prompt("Ingrese la cantidad de horas que estubo stacionado: ");
let costo = 0;

if (hora < 0.5) {0
    costo = 0;
} else if (hora >= 0.5 && hora < 2) {
    costo =10;
} else if (hora >= 2 && hora <= 3) {
    costo = 25;
} else if (hora == 3) {
    costo = 30;
}else if (hora >=3.1) {
    costo = 10*hora;
}
console.log('este es el total a pagar: '+costo);
