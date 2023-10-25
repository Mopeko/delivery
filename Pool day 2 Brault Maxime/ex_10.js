var hamsandwich = 0
var tunasandwich = 0
var vegetarians = 0
while(breadCount >= 2 && hamCount >= 1){
breadCount= breadCount -2;
hamCount = hamCount -1;
hamsandwich = hamsandwich + 1
}
while(breadCount >= 2 && tunaCount >= 1 && saladCount >= 2){
breadCount= breadCount -2;
tunaCount = tunaCount -1;
saladCount = saladCount - 2;
tunasandwich = tunasandwich + 1
}
while(breadCount >= 2 && tomatoCount >= 2 && saladCount >= 1){
breadCount= breadCount -2;
saladCount = saladCount -1;
tomatoCount = tomatoCount -2;
vegetarians = vegetarians + 1
}
displayThisText("the number of ham sandwiches that can be made "+ hamsandwich)
displayThisText("the number of tuna sandwiches that can be made "+ tunasandwich)
displayThisText("the number of vegetarian sandwiches that can be made "+ vegetarians)
displayIngredients(breadCount + hamCount + tunaCount + saladCount + tomatoCount)