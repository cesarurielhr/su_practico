// Ejemplo de palabra
let palabra = 'radar';


// Convertir la palabra a minúsculas para evitar problemas con mayúsculas
let palabraMinuscula = palabra.toLowerCase();


// Invertir la palabra
let palabraInvertida = palabraMinuscula.split('').reverse().join('');


// Verificar si la palabra original es igual a la palabra invertida
if (palabraMinuscula === palabraInvertida) {
  console.log(palabra + ' es un palíndromo.');
} else {
  console.log(palabra + ' no es un palíndromo.');
}
