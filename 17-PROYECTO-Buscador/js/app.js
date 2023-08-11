// Variables   
const d = document,
      resultado       = d.querySelector('#resultado'),
      marca           = d.querySelector('#marca'),
      minimo          = d.querySelector('#minimo'),
      maximo          = d.querySelector('#maximo'),
      puertas         = d.querySelector('#puertas'),
      transmision     = d.querySelector('#transmision'),
      color           = d.querySelector('#color'),
      year            = d.querySelector('#year'),
      max             = new Date().getFullYear(),
      min             = max - 10 
;
//

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}



// Eventos
d.addEventListener('DOMContentLoaded',()=> {
    mostrarAutos(autos); // Muestra los autos en el DOM

    // Llenar las opciones de años
    llenarSelect();
});

// Event listener para los selects de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();

});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});



// Funciones
function mostrarAutos(autos) {
    limpiarHTML(); // Elimina el HTML previo

    autos.forEach( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto; 
        const autoHtml = d.createElement('P');
        autoHtml.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHtml)
    });
}

// Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Generar los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const option = d.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option); // Agregar las opciones en el select
    }
}


// Funcion que filtre en base a la busqueda
function filtrarAuto() {
    const resultado = autos.
    filter(filtrarMarca).
    filter(filtrarYear).
    filter(filtrarMinimo).
    filter(filtrarMaximo).
    filter(filtrarPuertas).
    filter(filtrarTransmision).
    filter(filtrarColor);

    // console.log(resultado);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();
    
    const noResultado = d.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = "No hay resultados";
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    }
    return auto
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    }
    return auto
}


function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto
}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto
}

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto
}

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }
    return auto
}