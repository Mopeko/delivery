async function display_weather_chart(lattitude,longitude){
    document.querySelector('img').src="http://www.7timer.info/bin/civil.php?lon=" + longitude.toString() + "&lat=" + lattitude.toString() + "&ac=0&lang=en&unit=metric&output=internal&tzshift=0"
}
display_weather_chart(44.8742584,-0.5779699)