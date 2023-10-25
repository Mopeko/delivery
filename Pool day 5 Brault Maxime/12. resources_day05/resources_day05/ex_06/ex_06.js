window.onload = () => {
    var size = document.querySelector('window');
    var hover = document.querySelector('img')
    function hoverr () {
        alert("Pretty, isn't it?")
    }
    function sizee () {
        alert("Size matters")
    }
    hover.addEventListener("mouseover", hoverr)
    window.addEventListener("resize", sizee)
}
//Mopek