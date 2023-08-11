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



// Instanciarlo
const emanuel = new Cliente('Emanuel', 200);
console.log(emanuel.tipoCliente());
console.log(emanuel.nombreClienteSaldo());
console.log(emanuel.retiraSaldo(50));


console.log(emanuel);
