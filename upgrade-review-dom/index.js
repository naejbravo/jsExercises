// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const createButtonDelete = () =>{
    return "<button class='deleteItem'>X</button>";
}


const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);
for (const country of countries) {
  const li$$ = document.createElement("li");
  ul$$.appendChild(li$$).innerHTML = `${country}`;
}

// ****1.2 Elimina el elemento que tenga la clase .fn-remove-me.;
const fnRemove$$ = document.querySelector(".fn-remove-me");
fnRemove$$.remove();

// // 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// // en el div de html con el atributo data-function="printHere".
// // const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const divPrint$$ = document.querySelector('[data-function="printHere"]');
const ul2$$ = document.createElement("ul");
divPrint$$.appendChild(ul2$$);
for (const car of cars) {
  const li2$$ = document.createElement("li");
  ul2$$.appendChild(li2$$).innerHTML = `${car}`;
}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const ul3$$ = document.createElement("ul");
document.body.appendChild(ul3$$);
for (const country of countries2) {
  const li3$$ = document.createElement("li");
  li3$$.setAttribute("class", "itemLastList");
  ul3$$.appendChild(
    li3$$
  ).innerHTML = `<h4>${country.title}</h4><img src='${country.imgUrl}' /> ${createButtonDelete()}`;
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
//let li3toRemove$$ = document.querySelectorAll("li.itemLastList");
//const liArray = Array.from(li3toRemove$$);
//let index = liArray.length - 1;
//console.log(liArray);
const button$$ = document.createElement("button");
button$$.textContent = "Elimina el ultimo elemento";
document.body.appendChild(button$$);

button$$.addEventListener("click", () => {
    const li3toRemove$$ = document.querySelectorAll("li.itemLastList");
    console.log(li3toRemove$$.length);
    let deleteLi = li3toRemove$$.length - 1;
    console.log(li3toRemove$$);
    if(li3toRemove$$.length > 0){
        li3toRemove$$[deleteLi].remove();
    }
    
    
})


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.

const buttonsRemove$$ = document.querySelectorAll(".deleteItem");
for (const button of buttonsRemove$$) {
    button.addEventListener("click", () => {
        console.log(button.parentNode);
        button.parentNode.remove();
    })
}
