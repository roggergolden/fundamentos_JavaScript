const metodoPago = "cheque";

switch(metodoPago){
    case "tarjeta":
        console.log("pagaste con tarjeta");
        break;

    case "cheque":
            console.log("el usuario pagará con cheque, revisaremos los fondos primero");
            break;
    
    default:
        console.log("Aun no has pagado");

        break;


}