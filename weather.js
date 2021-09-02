const infowether = document.querySelector("#weather-container span");
const API_KEY = "6ab68981aee2954e9ffb336b6a2dfc02";

function currentLocation(pos){
const info = pos.coords;
const lat = info.latitude;
const lon = info.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

fetch(url).then(response => response.json())
    .then(data => 
        infowether.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp} º`)


}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

navigator.geolocation.getCurrentPosition(currentLocation, error)