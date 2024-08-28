function invertirFrase(frase) {
  // Dividimos la frase en palabras
  const palabras = frase.split(' ');
  // Invertimos el orden de las palabras
  const palabrasInvertidas = palabras.reverse();
  // Unimos las palabras invertidas en una nueva frase
  const fraseInvertida = palabrasInvertidas.join(' ');
  return fraseInvertida;
}

const fraseOriginal = 'Hola mundo, ¿cómo estás?';
const fraseInvertida = invertirFrase(fraseOriginal);
console.log(fraseInvertida); // Salida: estás? cómo ¿mundo Hola