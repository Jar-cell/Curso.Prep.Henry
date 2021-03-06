// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
    return array[0];
}
devolverUltimoElemento([1, 2, 3, 4, 5, 6, 7, 8]);


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}
devolverUltimoElemento([1, 2, 3, 4, 5, 6, 7, 8]);



function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
obtenerLargoDelArray([1, 2, 3, 4, 5, 6, 7, 8]);



function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var x = [];
    for (var i = 0; i < array.length; i ++){
   
   x.push(array[i] + 1);
  }
  return x;
}
incrementarPorUno([5, 4, 19, 9]);



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray([1, 2, 3, 4, 5, 6, 7, 8], 10);


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray([1,2,3,4,5], 10);


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
      return palabras.join(' ');
}
dePalabrasAFrase(['Henry ', 'JavaScript ', 'Class']);


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    }
  }
  return false;
}
arrayContiene([1,2,3,4,5,6], 5);



function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i = 0; i < numeros.length; i ++){    
    suma = suma + numeros[i];
  }
  return suma;
}
agregarNumeros([1, 2, 3]);



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (var i = 0; i < resultadosTest.length; i ++){    
    suma = suma + resultadosTest[i];
    
 }
 var x = resultadosTest.length;
 var promedio = suma / x;
return promedio;
}
promedioResultadosTest([10,10,16,12]);



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var x = numeros[0];
  for (var i = 0; i < numeros.length; i ++){
    if (numeros[i] > x){
      x = numeros[i];
    }

  }
  return x;
}
numeroMasGrande([2,3,9,5,6,8]);



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var suma = 1;
  if (arguments.length === 0){
    return 0;
  }
  for (var i = 0; i < arguments.length; i ++){
   suma = suma * arguments[i];
  }
  return suma;
}
multiplicarArgumentos(3,4,2,6);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
