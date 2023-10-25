async function check_route(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            console.log("all is good");
        } else {
            console.log("shit happens");
        }
    } catch (error) {
         console.log("shit happens"); 
    }
}
check_route("https://dog.ceo/api/breeds/image/random");
