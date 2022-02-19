/*Iteración #2: Mix Fors
Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

function avgVolume(params) {
  let sounds = [];
  for (const user of params) {
    for (const key in user.favoritesSounds) {
      sounds.push(user.favoritesSounds[key].volume);
    }
  }
  let totalItems = sounds.length;
  let totalVolume = 0;
  let avgVolume = 0;
  for (const i of sounds) {
    totalVolume = totalVolume + i;
  }
  avgVolume = totalVolume / totalItems;
  return avgVolume;
}

resultado = avgVolume(users);
console.log(resultado);