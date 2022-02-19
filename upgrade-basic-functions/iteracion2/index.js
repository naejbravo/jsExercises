/**Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
    let large = 0;
    let word = "";
    for (let index = 0; index < param.length; index++) {
        if (param[index].length > large){
            large = param[index].length;
            word = param[index];
        }
    }
    console.log(word);
}

findLongestWord(avengers);

