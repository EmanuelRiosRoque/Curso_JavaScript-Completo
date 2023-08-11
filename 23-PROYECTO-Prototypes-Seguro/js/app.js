// Variables



// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
} 

function UI () {

}

// Llena las opciones de los años
UI.prototype.llenarOpciones = function () {
    const max = new Date().getFullYear(),
          min = max - 20
    ;
    const slectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i;
        
        slectYear.appendChild(opt)
    }
}
// Muestra alertas en el DOM
UI.prototype.mostrarAlerta = function(mensaje, tipo) {
    const div = document.createElement('DIV')
    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar al HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

// Instanciar UI
const ui = new UI();

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años
});


// Functions
eventListeners()
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionado
    const marca = document.querySelector('#marca').value
    // Leer el año 
    const year = document.querySelector('#year').value
    // Leer tipo cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo ==='') {
        ui.mostrarAlerta('Los campos son obligatorios', 'error');
        return;
    } else {
        console.log('Bien');
    }
}