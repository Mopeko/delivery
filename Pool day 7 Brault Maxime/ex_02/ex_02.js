var currentRotation = 0;
function rotatecircle(step) {
    currentRotation += step

    if (step == 0) {
        currentRotation = 0;
    }
    var stockrota = currentRotation.toString() + "deg";
    document.getElementById('circle').style.transform = 'rotate(' + stockrota + ')'
}
document.getElementById('rotate-add-90').addEventListener("click", function () { rotatecircle(90) })
document.getElementById('rotate-add-45').addEventListener("click", function () { rotatecircle(45) })
document.getElementById('rotate-reset').addEventListener("click", function () { rotatecircle(0) })
document.getElementById('rotate-sub-90').addEventListener("click", function () { rotatecircle(-90) })
document.getElementById('rotate-sub-45').addEventListener("click", function () { rotatecircle(-45) })
