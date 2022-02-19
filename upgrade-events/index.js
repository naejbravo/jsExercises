click$$ = document.querySelector(".click");
focus$$ = document.querySelector(".focus");
value$$ = document.querySelector(".value");

/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/
btn$$ = document.querySelector("#btnToClick");
btn$$.addEventListener("click", () => console.log(click$$.value));


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
focus$$.addEventListener("focus", () => console.log(focus$$.value));

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
value$$.addEventListener("input", () => console.log(value$$.value))
