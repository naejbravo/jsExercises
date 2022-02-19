//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let div$$ = document.createElement("div");
document.body.appendChild(div$$);
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let p$$ = document.createElement("p");
let div2$$ = document.createElement("div");
div2$$.appendChild(p$$);
document.body.appendChild(div2$$);
//insert.appendChild(div$$).appendChild(p$$);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.le
let div3$$ = document.createElement("div");
document.body.appendChild(div3$$);
for (let i = 0; i < 6; i++) {
  let p2$$ = document.createElement("p");
  div3$$.appendChild(p2$$);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let pDinamica$$ = document.createElement("p");
document.body.appendChild(pDinamica$$).innerHTML = "Soy dinamico!";
//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.querySelector("h2.fn-insert-here").innerHTML = "Wubba Lubba dub dub";

/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
let ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
for (let i = 0; i < apps.length; i++) {
	let li$$ = document.createElement("li");
	ul$$.appendChild(li$$).innerHTML = apps[i];
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let fnRemove = document.querySelectorAll(".fn-remove-me");
for (let i = 0; i < fnRemove.length; i++) {
	fnRemove[i].remove();
	
}

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/
let divSinClase = document.querySelectorAll("div");
let newP = document.createElement("p");
newP.textContent = "Voy en medio!";
document.body.insertBefore(newP, divSinClase[1]);
console.log(divSinClase);
/*for (let i = 0; i < array.length; i++) {
	const element = array[i];
	
}*/


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let fnd = document.querySelectorAll("div.fn-insert-here");
for (let i = 0; i < fnd.length; i++) {
	let newP$$ = document.createElement("p");
	newP$$.textContent = "Voy dentro!";
	fnd[i].appendChild(newP$$);
}