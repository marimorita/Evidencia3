let an1 = parseInt(prompt("Ingresa el primer angulo"));
let an2 = parseInt(prompt("Ingresa el segundo angulo"));
let an3 = parseInt(prompt("Ingresa el tercer angulo"));

let totalan = an1+an2+an3;

if (totalan== 180) {
    console.log("Es un triangulo");
}else{
    console.log("No es un triangulo");
}
