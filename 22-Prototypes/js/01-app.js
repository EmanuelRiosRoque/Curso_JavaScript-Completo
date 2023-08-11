const cliente = {
    nombre: 'Emanuel',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);


// Object constructor

// Hacer nuestro objeto mas dinamico
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('juan', 500);
console.log(juan);