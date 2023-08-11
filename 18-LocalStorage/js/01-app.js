localStorage.setItem('nombre', 1);

const producto = {
    nombre : "Monitor",
    precio : 200    
}

const productoString = JSON.stringify(producto); // Convertimos todo el contenido de nuestro arreglo en elementos string
localStorage.setItem('producto', productoString);

const meses = ['Enero','Febrero','Marzo'];
// Esto solo muestra el objeto en elementfo string
// // localStorage.setItem('meses',JSON.stringify(meses));
// Convertir el objeto en objeto y el array en el array
console.log(JSON.parse(productoString)); 

