/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let noDuplicate = [];
    for (let index = 0; index < param.length; index++) {
        if(!noDuplicate.includes(param[index])){
            noDuplicate.push(param[index]);
        }
    }
    return noDuplicate;
  }

  let noDuplicate = removeDuplicates(duplicates);
  console.log(noDuplicate);

