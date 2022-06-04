let total = 0;
let precio = 0;
let cantidad = 0;
function pedirNombre() {
    let nombre = prompt("ingresa tu nombre");
    while (nombre === "" || !isNaN(nombre)) {
        nombre = prompt("ingresa tu nombre");
    }
    alert("Bienvenid@: " + nombre);
    return nombre;
}

function elegirProducto() {
    let prenda = "";
    do {
        prenda = prompt("¿Que prenda desea llevar?\n ingrese el numero correspondiente al producto\n (1)pantalones: $2300\n (2)remeras: $1340\n (3)camisas: $2120 \n (4)camperas: $4210 \n ");
        switch (prenda.toLowerCase()) {
            case "1":
                precio = 2300;
                break;
            case "2":
                precio = 1340;
                break;
            case "3":
                precio = 2120;
                break;
            case "4":
                precio = 4210;
                break;
            default:
                prenda = ""
                alert("No ingreso un producto valido");
                break;
        }
    } while (prenda == "")

}

function pedirCantidad() {
    cantidad = parseInt(prompt("ingrese la cantidad que sea comprar"));
    while (isNaN(cantidad)) {
        cantidad = parseInt(prompt("ingrese la cantidad que sea comprar"));
    }
    total += total + cantidad * precio;
}

pedirNombre();
do {
    elegirProducto();
    pedirCantidad();
    var respuesta = prompt("te gustaria agregar algun otro producto? ingresa: s para si o n para no");
    respuesta = respuesta.toLowerCase()
} while (respuesta == "s")

alert("el precio total es: $" + total);
alert("Gracias por su compra, en breve nos estaremos comunicando para la entrega")


