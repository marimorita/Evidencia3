let menu = parseInt(prompt("Ingresa 1 si quieres un desayuno, el 2 si quieres un almuerzo y el 3 si quieres una cena"));

switch (menu) {
    case 1:
        console.log("Ordenaste un desayuno");
        break;

    case 2:
        console.log("Ordenaste un almuerzo");
        break;

    case 3:
        console.log("Ordenaste una cena");
        break;

    default:
        console.log("Porfavor ingresa una opcion que sea valida");
        break;
}