let contra = prompt("Ingresa tu clave");

let ocho = contra.length >= 8;
let quince = contra.length <= 15;
let espacio = contra.includes(" ");

if(ocho && quince && espacio == true){
    alert("La clave es valida ", contra)
}
else{ 
    alert("La clave es invalida, debe contener entre 8 y 15 caracteres, ademas de contener un espacio");
}
