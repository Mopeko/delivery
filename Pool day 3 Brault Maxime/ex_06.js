fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"] 
function getIndexFromName(r) {  
if(r != -1 ) {
return fruits.indexOf(r);
}else{
return null
}
}
displayResult(getIndexFromName("Apple"))