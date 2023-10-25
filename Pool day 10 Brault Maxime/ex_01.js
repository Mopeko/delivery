function promiseMe(promise) {
    return new Promise(function(resolve){;
    resolve("I promise you to " + promise);
})}
promiseMe("fly to the moon").then((value) => {
    console.log(value);
})
