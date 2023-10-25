var addbutton = document.querySelector('.plus-btn');
function additem(){
    var valuead = document.querySelector('input[name="name"]').value
    console.log(valuead++);
}
addbutton.addEventListener("click", function(){additem});