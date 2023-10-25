var rectangle = document.getElementById('square');
function reduceOpacity() {
    rectangle.style.opacity = '0.5';
    rectangle.addEventListener("mouseout", resetOpacity)
}
function resetOpacity() {
    rectangle.style.opacity = '1';
}
rectangle.addEventListener("mouseover", reduceOpacity)