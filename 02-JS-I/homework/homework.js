// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'jsus';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
devolverString('provista');


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var sum = x + y;
  return sum;
}
suma(2, 2);


function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  var res = x - y;
  return res;
}
resta(5, 2);


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var mul = x * y;
  return mul;
}
multiplica(2, 2);


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var div = x / y;
  return div; 
}
divide(21, 7);



function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x === y){
    return true;
  }
  return false;
}
sonIguales(5, 5);


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var primera = str1.length;
  var  segunda = str2.length;
  if(primera === segunda){
    return true;
  }
  return false;
}
tienenMismaLongitud('igual', 'igual');




function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90){
    return true;
  }
  return false;
}
menosQueNoventa(100);



function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50){
    return true;
  }
  return false;
}
mayorQueCincuenta(100);



function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y;
  return resto;
}
obtenerResto(21, 5);



function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 0){
    return true;
  }
  return false;
}
esPar(5);



function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 !== 0){
    return true;
  }
  return false;
}
esImpar(5);



function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var x = Math.pow(num, 2);
  return x;
}
elevarAlCuadrado(5);



function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var x =Math.pow(num, 3);
  return x;
}
elevarAlCubo(5);



function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var x = Math.pow(num, exponent);
  return x;
}
elevar(5, 3);


function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
  var x = Math.round(num);
  return x;
}
redondearNumero(6.7);



function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  var x = Math.ceil(num);
  return x;

}
redondearHaciaArriba(9.1);



function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var ex = '!';
  var suma = str + ex;
  return suma;
}
agregarSimboloExclamacion('hola mundo');



function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var combinado = nombre + ' ' + apellido;
  return combinado;
}
combinarNombres('Dulce', 'Maria');



function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var conecta = 'Hola' + ' ' + nombre + '!';
  return conecta;
}
obtenerSaludo('Dulce');



function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return area;
}
obtenerAreaRectangulo(4, 5);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
