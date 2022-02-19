/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
*/
let showme = document.querySelector(".showme");
console.log(showme);
/*
1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
*/
let titulo = document.querySelector("#pillado");
console.log(titulo);

/*

1.3 Usa querySelector para mostrar por consola todos los p
*/
let parrafos = document.querySelectorAll("p");
console.log(parrafos);
/*
1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
*/
let pokemones = document.querySelectorAll(".pokemon");
console.log(pokemones);
/*
1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".
*/
let test = document.querySelectorAll(`[data-function='testMe']`);
console.log(test);
/*


1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

let tercerPersonaje = document.querySelectorAll(`[data-function='testMe']`)[2];
console.log(tercerPersonaje);


