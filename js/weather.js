const apikey ="9f0fc8bc4c8d40ceadbdb17feb29d9d1";



function onGeok(position){
const lat = position.coords.latitude;
const lon = position.coords.longitude;
   const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
fetch(url)
.then(response => response.json())
.then(data =>{
    const weatherContainer = document.querySelector("#weather #weather1");
    const cityContainer = document.querySelector("#weather #weather2");
    const name = data.name;
    const weather = data.weather[0].mian;
    cityContainer.innerText = data.name;
    weatherContainer.innerText = `${data.weather[0].main} / ${ Math.floor(data.main.temp)}`;
})
}
function onGe0Error(){
    alert("Can't Find you!!");
}

navigator.geolocation.getCurrentPosition( onGeok, onGe0Error);
