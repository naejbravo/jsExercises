/*Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param, nombre) {
  let resultado = [];
  for (let index = 0; index < param.length; index++) {
    if (param.includes(nombre)) {
      //console.log(true, param.indexOf(nombre));
      resultado.push(true, param.indexOf(nombre));
      break;
    } else {
      resultado.push(false);
      break;
    }
  }
  return resultado;
}

let resultado = finderName(nameFinder, "Peggy");
console.log(resultado);
