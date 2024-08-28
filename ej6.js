
// Ejemplo de arreglo de números
let numeros3 = [5, 12, 8, 130, 44];


// Valor dado por el usuario
let valorFiltro = 10;


// Filtrar los elementos que son mayores que el valor dado
let numerosFiltrados = numeros3.filter(function (numero) {
  return numero > valorFiltro;
});


// Mostrar los elementos filtrados en la consola
console.log('Números mayores que ' + valorFiltro + ': ' + numerosFiltrados);
