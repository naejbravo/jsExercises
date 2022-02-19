// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

const baseUrl = "https://api.nationalize.io";

const button$$ = document.querySelector("button");

const search = (value) => {
  const input$$ = document.querySelector("input");
  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((data) => {
      printPersonData(data);
      console.log(data);
    });
};

const printPersonData = (person) => {
  const p$$ = document.createElement("p");
  let text = `El nombre ${person.name} tiene`;
  for (const country of person.country) {
    const probability = Math.floor(country.probability * 100);
    text += ` un ${probability}% de ser de ${country.country_id}`;
  }
  p$$.innerHTML = text;
  document.body.appendChild(p$$);
};

button$$.addEventListener("click", search);
