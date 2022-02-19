/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

Sugerencia de función:*/

let texto = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (text == array[i]) {
      console.log(text ,array.indexOf(text));
    }
  }
}
//Posicion 1
findArrayIndex(texto, "Mosquito");
//No retorna nada
findArrayIndex(texto, "Jean");
//Posicion 3
findArrayIndex(texto, "Ajolote");