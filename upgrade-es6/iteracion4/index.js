// **Iteración #4: Map**

// ```jsx
// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersName = users.map((name, i) => {
  return users[i].name;
});

console.log(usersName);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const users2NameAndAnacleto = users2.map((name, i) => {
  let userA = users2[i].name;
  userA = userA.indexOf("A");
  if (userA == 0) {
    return "Anacleto";
  } else {
    return users2[i].name;
  }
});

console.log(users2NameAndAnacleto);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesVisited = cities.map((name, i) => {
//   console.log(cities[i].isVisited);
  if (cities[i].isVisited === true) {
      return cities[i].name + " Visitado"
  }else{
      return cities[i].name;
  }
});

console.log(citiesVisited);
