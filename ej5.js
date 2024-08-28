// Ejemplo de arreglo de números
let numeros2 = [10, 20, 30, 40, 50];


// Calcular la suma de los elementos del arreglo
let suma = numeros2.reduce(function (acumulador, valorActual) {
  return acumulador + valorActual;
}, 0);


// Mostrar la suma en la consola
console.log('La suma de los elementos es: ' + suma);
