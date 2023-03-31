let n1 = parseInt(prompt("Ingresa el primer numero"));
let n2 = parseInt(prompt("Ingresa el segundo numero"));

switch (true) {
    case n1 >= n2:
        console.log(n1,"Es mayor que elS",n2);
        break;
    case n1 <= n2:
        console.log(n1,"Es menor que el",n2);
        break;
    default:
        console.log("Los dos numeros son iguales");
        break;

}