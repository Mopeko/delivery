fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruitNameFromIndex(index) {
if(index in fruits){
return first = fruits[index];
}else if(index = -1){
return last = fruits[5];
}else{
return null
}
}

let result = getFruitNameFromIndex(4)
displayResult(result)