// Variables
const d = document, 
        formulario = d.querySelector("#formulario"),
        listaNotas = d.querySelector("#lista-notas")
;

// Creamos objeto para las notas
let notas = [];



// Event Listeners
eventListeners()
function eventListeners() {
    // Cuando el usuario agrega una nueva nota
    formulario.addEventListener("submit", agregarNota);

    // Cuando el documento esta listo
    d.addEventListener('DOMContentLoaded', () => {
        notas = JSON.parse(localStorage.getItem('notas')) || [];
        crearHtml();
        console.log(notas);
    });

}


// Funciones
function agregarNota (e) {
    e.preventDefault();

    // Textarea donde el usuario escribe las nota
    const nota = d.querySelector("#notas").value


    // Validacion
    if (nota === '') {
        mostararAlerta('La nota no puede ir vacio');
        return; // Evita que se ejecuten mas lineas de codigo
    }
    // Fin validacion


    const notasObj = {
        id: Date.now(),
        nota: nota
    }

    // Añadir nota al arreglo notas
    notas = [...notas, notasObj];

    // Una vez agregado vamos a crear el HTML
    crearHtml();

    // Reiniciar Formulario
    formulario.reset();
} 

// Funcion de moestrar mensaje
function mostararAlerta(msj) {
    const mensajeErr = d.createElement('P');
    mensajeErr.textContent =  msj;
    mensajeErr.classList.add('error');
    // Insertar al DOM
    const contenido = d.querySelector('#contenido');
    contenido.appendChild(mensajeErr);
    
    setTimeout(() => {
        mensajeErr.remove();
    }, 3000);
}

// Funcion muestra un listado de las notas
function crearHtml() {
    // Limpiar antes de agregar uno nuevo
    limpiarHTML();

    if (notas.length > 0) {
        notas.forEach(nota => {
            // Agregar boton de eliminar
            const btnEliminar = d.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarNota(nota.id); 
            }

            //Crear el HTML
            const li = d.createElement('LI');

            // Añador texto
            li.textContent = nota.nota;

            //Asignar boton
            li.appendChild(btnEliminar);

            // Mostrar en el DOM
            listaNotas.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega las notas en el Storage
function sincronizarStorage() {
    localStorage.setItem('notas', JSON.stringify(notas));
}


// Eliminar notas
function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    crearHtml();
}



// Limpiar el HTML
function limpiarHTML() {
    while (listaNotas.firstChild) {
        listaNotas.removeChild(listaNotas.firstChild);
    }
}
