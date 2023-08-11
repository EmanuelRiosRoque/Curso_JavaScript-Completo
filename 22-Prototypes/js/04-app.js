function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Agregar mas caracteristicas a nuestro cliente
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo >  5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Standard';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}
Cliente.prototype.retiraSaldo = function(retiro) {
    this.saldo -= retiro
}

function Persona(nombre, saldo, telefono) {
    // Ederar parametros de un proto
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono; // parametro nuevo
}

// Ederar Funciones de un proto
Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;


//Instania
const emanuel = new Persona('Emanuel', 500, 5581989390);
console.log(emanuel);
console.log(emanuel.nombreClienteSaldo()); 

Persona.prototype.mostrarTelefono = function () {
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(emanuel.mostrarTelefono());