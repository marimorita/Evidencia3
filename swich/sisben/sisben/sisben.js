//Crear un programa que reciba el sisben de un usuario y muestre
//si este tiene derecho a un subsidio o no. Si el sisben es 1, 2 o 3
//el usuario tiene derecho.

let sisben = parseInt(prompt("Ingresa el sisben"));
switch (sisben) {
    case 1:
        console.log ("Tienes derecho a subsido");
        break;
    case 2:
        console.log ("Tienes derecho a subsido");
        break;
    case 3:
        console.log ("Tienes derecho a subsido");
        break;
    default:
        console.log ("No tienes derecho");
        break;
}