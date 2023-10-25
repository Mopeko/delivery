document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("city-input");
    const fetchButton = document.getElementById("fetch-button");
    const dataContainer = document.getElementById("data-container");

    fetchButton.addEventListener("click", function(){
        const city = cityInput.value
        fetch("https://wttr.in/" + city)
            .then(response => {
                return response.text();
            })
            .then(data => {
                console.log(data);
                dataContainer.innerHTML = data;
            })
            .catch(error => {
                console.error("Une erreur s'est produite", error);
            });
    })

})
