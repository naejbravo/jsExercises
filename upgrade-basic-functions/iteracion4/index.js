/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let promedio = 0;
  for (let index = 0; index < param.length; index++) {
      promedio = promedio + param[index];
  }
  promedio = promedio / param.length;
  return promedio;
}

let resultado = average(numbers);
console.log(resultado);