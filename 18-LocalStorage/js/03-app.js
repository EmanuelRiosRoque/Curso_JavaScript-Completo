// Para eliminar un elemento del localStorage solo es necesario el "Key"
localStorage.removeItem('producto')

// Para actualizar un registro
const mesesArray = JSON.parse( localStorage.getItem('meses') );
console.log(mesesArray);

// Para agregar un nuevo dato a nuestro arreglo es ncesario un PUSH
mesesArray.push('Nuevo mes');
console.log(mesesArray);

// De esta manera GUARDAMOS los nevos registros en el localStorage
localStorage.setItem('meses', JSON.stringify(mesesArray))


localStorage.clear(); // Este snnipped lo que hace es limpiar por completo el localStorage