function checkFuel(fuel){
return new Promise(function(resolve,reject){
    if(fuel >= 9){
        resolve("Ready to Launch")
    }else{
        reject("Please refill fuel")
    }
})}
checkFuel(9).then((value) => {
console.log(value);
}).catch((error) => {
console.log(error);
})