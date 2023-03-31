let n1 = parseInt(prompt("Ingresa un numero"));

let resultado = n1 % 2;

switch (true) {
    case resultado == 0:
        console.log(n1,"El numero es par");
        break;

    default:
        console.log(n1,"El numero no es par");
        break;
}
