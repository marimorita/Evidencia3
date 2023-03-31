let ang1 = parseInt(prompt("Ingrese el primer angulo"));
let ang2 = parseInt(prompt("Ingrese el segundo angulo"));
let ang3 = parseInt(prompt("Ingrese el tecer angulo"));

let total = ang1+ang2+ang3;

switch (true) {
    case total ==180:
        console.log("Es un triangulo");
        break;

    default:
        console.log("No es un triangulo");
        break;

}

