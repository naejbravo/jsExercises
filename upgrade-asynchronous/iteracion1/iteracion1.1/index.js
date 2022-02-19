// **Iteración #1: Fetch**

// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
// console.log(). Para ello, es necesario que crees un .html y un .js.
const fetchMichael = () => {
  fetch("https://api.agify.io?name=michael")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

fetchMichael();

