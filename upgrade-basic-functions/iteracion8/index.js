/**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:*/

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(param) {
  let words = [];
  for (let index = 0; index < param.length; index++) {
      if(param[index] in words){
          words[param[index]]++;
      }else{
          words[param[index]] = 1;
      }
  }
  return console.log(words);
}

repeatCounter(counterWords);
