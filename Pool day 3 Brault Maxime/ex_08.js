fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];

function getFruit(r) {
  if (typeof r === 'string') {
    if (fruits.indexOf(r) != -1) {
      return fruits.indexOf(r);
    } else {
      return null
    }
  } else {
    if (r > fruits.length) {
       return null;
    } else{
    return fruits[r];
     
    }
  }
}
displayResult(getFruit(4))