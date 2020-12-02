const API_KEY = "83871061b722f33c2cb82ebbd23c0904";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

const weather = document.querySelector(".js-weather .weather__text");
const icon = document.getElementById('weather-icon');


function getWeather(coords) {
    fetch(
      `${WEATHER_API}lat=${coords.latitude}&lon=${
        coords.longitude
      }&appid=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(json => {
        const name = json.name;
        const temperature = json.main.temp;
        icon.src = 'http://openweathermap.org/img/wn/'+json.weather[0].icon+'@2x.png';
        weather.innerHTML = `${Math.floor(temperature)}° @ ${name}`;
      });
  }

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = {
        latitude,
        longitude
    };
    localStorage.setItem("coords", JSON.stringify(coords));
    getWeather(coords);
  }
  
  function handleGeoFailure() {
    console.log("no location");
  }

function loadWeather() {
    const currentCoords = localStorage.getItem("coords");
    if (currentCoords !== null) {
      const parsedCoords = JSON.parse(currentCoords);
      getWeather(parsedCoords);
      return;
    } else {
      navigator.geolocation.getCurrentPosition(
        handleGeoSuccess,
        handleGeoFailure
      );
    }
  }

function init(){
    loadWeather();
}

init();