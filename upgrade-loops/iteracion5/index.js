/*Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:*/

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function findPlaces(params) {
  let places = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i].id == 11 || params[i].id == 40) {
      delete params[i];
    }
    if (!places.includes(params[i])) {
      if (params[i] != undefined) {
        places.push(params[i]);
      }
    }
  }
  return places;
}

let places = findPlaces(placesToTravel);
console.log("Places id diff 11, 40",places);
