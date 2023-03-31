let num = parseInt(prompt("Ingresa un numero"));

switch (true) {
    case num % 5 ==0 && num % 3 ==0:
        console.log("El numero es divisible entre 3 y 5");
        break;

    default:
        console.log("El numero no es divisible ni por 5 ni por 3");
        break;
}







