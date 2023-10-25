function promiseMe(promise) {
    return new Promise(function(resolve){;
    resolve("I promise you to " + promise);
})}
function checkStatus(machine){
    
}
promiseMe("fly to the moon").then((value) => {
    console.log(value);
})
checkStatus(promiseMe(" fly to the moon ")) ;
