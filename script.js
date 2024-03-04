const apiKey = "e831fb5052f372695c8b0d191aa6eb4a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humdity").innerHTML = data.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

