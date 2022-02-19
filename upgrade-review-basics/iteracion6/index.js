/**Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:*/

let text = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]];
    return(array);
}

console.log(swap(text, 0, 3)); 