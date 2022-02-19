function sum(numberOne , numberTwo) {
    let mayor;
    if(numberOne > numberTwo){
        mayor = numberOne;
    }else{
        mayor = numberTwo;
    }
    return mayor;
  }

  console.log(sum(1, 2));