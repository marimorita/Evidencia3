let a = parseInt(prompt("Ingresa el periodo anual"));

switch (true) {
    case a % 4 ==0 && año % 100 !==0 || a % 400 == 0:
        console.log("El periodo anual es bisiesto")
        break;

    default:
        console.log("El periodo anual no es bisiesto");
        break;
}