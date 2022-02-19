// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.
// ```
const baseUrl = "https://api.nationalize.io";

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
  const div$$ = document.createElement("div");
  document.body.appendChild(div$$);
  const button$$ = document.createElement("button");
  button$$.innerHTML = "X";

  div$$.appendChild(p$$);
  div$$.appendChild(button$$);

  button$$.addEventListener("click", () => {
      div$$.remove();
  })
};

const button$$ = document.querySelector("button");
button$$.addEventListener("click", search);
