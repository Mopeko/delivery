window.onload = () => {
var button = document.querySelector('.cart-btn');
button.textContent= "CHANGE COLOR";


function getRandomColor (){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for ( var i = 0; i < 6; i++){

        color += letters[Math.floor(Math.random()* 16)];
    }
    return color;
}


function changecolor(){
    document.body.style.background = getRandomColor();
}
button.addEventListener("click", changecolor);
}
//Mopek