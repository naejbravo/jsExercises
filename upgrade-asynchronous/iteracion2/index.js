// **Iteración #2: async-await**

// ```jsx
// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando
// async-await.
const runTimeOut = async () => {
  await new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

  console.log("Time out!");
};

runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await.
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  console.log(data);
};

getCharacters();
